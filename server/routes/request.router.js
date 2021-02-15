const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware.js");

/**
 * Update the requests column of a specific user, alerting them of a new request
 */
router.put("/:reqId", (req, res) => {
    // req.body contains the id of the user that we want to update the request column of 
    // I think req.body came along with the axios put request in the request saga
  
    const queryText = `UPDATE "user" SET "requests" = 'New Request #2' WHERE id = '45';`;
  
    const queryValues = [req.body.reqId];
//   removed 'queryValues' while query is being tested.  Still trying to figure out the correct sql injection
    pool
      .query(queryText)
      .then((result) => {

        // sets req_id = to user.id of requester
        const queryText = `UPDATE "user" SET "req_id" = '43' WHERE id = '45';`;
        pool
        .query(queryText)
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error("Error completing UPDATE user query in request.router", error);
        res.sendStatus(500);
      });
  });

module.exports = router;
