import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function TrainerList() {
  // reducer that holds trainers from search route results.rows
  const trainers = useSelector((store) => store.trainers);
  const [isRequested, setIsRequested] = useState(false);
  const [requestToggle, setRequestToggle] = useState(false);
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const dispatch = useDispatch();
  // const handleRequest = () => {
  //   console.log('trainer request toggle');

  //   setIsRequested(!isRequested);
  //   setRequestToggle(!requestToggle);
  // }

  const viewDetails = (trainer) => {
    history.push("/details");
  };

  const handleRequest = (trainer, user) => {
    // change state of request button

    setIsRequested(!isRequested);
    setRequestToggle(!requestToggle);
    console.log("request toggle");

    // this logic will trigger the REQUEST in requestSaga
    // the payload will be the id of the user
    dispatch({
      type: "REQUEST",
      payload: {
        trainer,
        user,
     
      },
    });
  };

  return (
    <div>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Trainer Name</th>

            <th>Trainer ID</th>

            <th>Specialties</th>

            <th>Trainer Details</th>
            <th>Request Trainer</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => {
            return (
              <tr>
                <td>{trainer.username}</td>
                <td>{trainer.id}</td>
                <td>{trainer.specialties}</td>

                {isRequested ? (
                  <td>Request Sent!</td>
                ) : (
                  <td>
                  <button onClick={(event) => handleRequest(trainer.id, user.name)}>
                    Request Trainer
                  </button>
                </td>
                )}
                  <td>
                    <button onClick={(event) => viewDetails(trainer.id)}>
                      View Details
                    </button>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TrainerList;
// onClick={handleRequest}
