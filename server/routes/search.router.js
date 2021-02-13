const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");

/**
 * Get all of the items on the shelf
 */
router.get("/", (req, res) => {
  
  const pronouns = req.params.pronouns
  console.log(pronouns);
  
  if (req.isAuthenticated()) {
    const query = `SELECT *
    FROM "user"
    WHERE "user".pronouns = '{"sheHer"}';`;
    pool
      .query(query)
      .then((result) => {
        res.send(result.rows);
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


