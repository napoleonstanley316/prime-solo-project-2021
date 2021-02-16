const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.delete("/:user/:trainer", (req, res) => {
  // GET route code here
  const user = req.params.user;
  const trainer = req.params.trainer;

  const queryText = [user, trainer];

  if (req.isAuthenticated()) {
    const query = `DELETE FROM "connections"
    WHERE "connections".client_id = $1
    AND "connections".trainer_id = $2`;

    console.log("delete route arrival");

    pool
      .query(query, queryText)
      .then((result) => {
        res.send(result.rows);
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
