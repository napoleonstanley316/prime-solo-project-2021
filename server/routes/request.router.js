const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");

/**
 * Update the requests column of a specific user, alerting them of a new request
 */
router.post("/:trainer/:user", (req, res) => {
  // trainer is the id of the trainer that we want to add a new request for
  const trainer = req.params.trainer;

  const queryText = `UPDATE "user" SET "requests" = 'New Request' WHERE id = $1;`;

  const queryValues = [trainer];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      const user = req.params.user;
      // sets req_id = to user.id of requester
      const queryText = `UPDATE "user" SET "req_id" = $1 WHERE id = $2;`;
      const queryValues = [user, trainer]
      pool.query(queryText, queryValues);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(
        "Error completing UPDATE user query in request.router",
        error
      );
      res.sendStatus(500);
    });
});

module.exports = router;
