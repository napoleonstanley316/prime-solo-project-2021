const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();





router.put("/:name/:id", (req, res) => {

    const name = req.params.name;
    const id = req.params.id;
    const queryText = [name, id]
    
    if (req.isAuthenticated()) {
      const query = `UPDATE "user"
      SET "name" = $1 
      WHERE id = $2`;
      pool
        .query(query, queryText)
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