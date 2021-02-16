const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");

/**
 * Update the requests column of a specific user, alerting them of a new request
 */
router.post("/:details/:user", (req, res) => {
  // trainer is the id of the trainer that we want to add a new request for
//   const id = req.params.id;

  const queryText = `UPDATE "user" SET "requests" = ' ' WHERE id = '45';`;

//   const queryValues = [id];
  pool
    .query(queryText)
    .then((result) => {
    //   const user = req.params.user;
      // sets req_id = to user.id of requester
      const queryText = `UPDATE "user" SET "trainer_id" = '45' WHERE id = '48';`;
    //   const queryValues = [user, trainer]
      pool.query(queryText);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(
        "Error adding user to trainer in accept.router",
        error
      );
      res.sendStatus(500);
    });
});

module.exports = router;