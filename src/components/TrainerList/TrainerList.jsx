import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import './TrainerList.css'
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function TrainerList() {



  const theme = createMuiTheme({
    palette: {
type: "dark",
    },
  });



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
console.log(trainer, user);
    setIsRequested(!isRequested);
    // setRequestToggle(!requestToggle);
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
    <ThemeProvider theme={theme}>
    <Paper className="paper">
 

    <div>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Trainer Image</th>

            <th>Name       </th>

            {/* <th>Specialties</th> */}

            <th>Pronouns     </th>
            <th>Request Trainer</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => {
            return (
              <tr>
                <td><img src={trainer.image} alt="profile image" width="250" height="250"></img></td>
                <td>{trainer.name}</td>
                <td>{trainer.pronouns}</td>

                {isRequested ? ( 
                  <td>Request Sent!</td> 
                ) : ( 
                  <td>
                  <button onClick={() => handleRequest(trainer.id, user.id)}>
                    Request Trainer
                  </button>
                </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    </Paper>
    </ThemeProvider> 

  );
}

export default TrainerList;
// onClick={handleRequest}
