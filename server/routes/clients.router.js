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
  const queryText = id
  if (req.isAuthenticated()) {
    const query = `SELECT * 
    FROM "connections"
    JOIN "user" ON "user".id = "connections".client_id
    WHERE "connections".trainer_id = $1`;
    pool
      .query(query, [queryText])
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

// SELECT "connections".client_id
//     FROM "connections"
//     WHERE trainer_id 