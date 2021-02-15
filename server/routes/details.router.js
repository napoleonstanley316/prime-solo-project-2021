const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");

/**
 * Get all of the items on the shelf
 */
router.get("/:id", (req, res) => {
  let id = req.params.id;
  if (req.isAuthenticated()) {
    const query = `SELECT *
    FROM "user"
    WHERE "user".id = $1`;
    pool
      .query(query, [id])
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