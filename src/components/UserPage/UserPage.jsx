import React from "react";
import { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RequestDetails from "../RequestDetails/RequestDetails.jsx";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const [name, setName] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [isTrainer, setIsTrainer] = React.useState(false);
  const [newRequest, setNewRequest] = React.useState(false);
  const [inEditMode, setInEditMode] = React.useState(false);
  const myTrainers = useSelector((store) => store.myTrainers);
  const myClients = useSelector((store) => store.myClients);
  const clientListReducer = useSelector((store) => store.clientListReducer);
  const deleteMyTrainerReducer = useSelector(
    (store) => store.deleteMyTrainerReducer
  );

  console.log({ deleteMyTrainerReducer });
  console.log({ myTrainers });
  console.log({myClients});
  console.log({clientListReducer});

  const editName = () => {
    console.log("edit name button clicked");
  };

  const editPronouns = () => {
    console.log("edit pronouns button clicked");
  };

  const editPhoto = () => {
    console.log("edit photo clicked");
  };



  
  const editProfile = (event) => {
    event.preventDefault();
    console.log("edit profile clicked");
    setInEditMode(!inEditMode);
    dispatch({
      type: "EDIT_PROFILE",
      payload: {
        name, 
        user: user.id,
   } });
  };


  const deleteTrainer = (myTrainerId, userId) => {
    console.log("delete trainer clicked");
    dispatch({ type: "DELETE_TRAINER", payload: { myTrainerId, userId } });
  };

  const viewDetails = () => {
    // this saga route should get the details (profile information) of user that created request for trainer
    console.log("view details of request");
    console.log("payload should be:", user.req_id);
    dispatch({
      type: "REQ_DETAILS",
      payload: user.req_id,
    });
    history.push("/reqDetails");
  };

  useEffect(() => {
    if (user.trainer === true) {
      setIsTrainer(!isTrainer);
    }
  }, []);

  useEffect(() => {
    if (user.requests === "New Request") {
      setNewRequest(!newRequest);
    }
  }, []);

    useEffect(() => {
    dispatch({ type: "FETCH_MYCLIENTS", payload: user.id });
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCH_MYTRAINERS", payload: user.id });
  }, []);
  console.log(myTrainers.trainer_id);

  // useEffect(() => {
  //   dispatch({ type: "RETURN_MYCLIENTS", payload: {myClients} });
  // }, []);



  console.log(myTrainers.trainer_id);

  return (
    <div className="container">
      <h2>Welcome, {user.name}!</h2>
      
      <h3>Profile Information</h3>
      

      <p>
        <img src={user.image} width="375" height="225"></img>{" "}
      </p>

      <button onClick={editProfile}>Edit Profile</button>
      {inEditMode ? (
        <>
          <p>In edit mode</p>
          <form onSubmit={editProfile}>
          <input
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)} />
   
          <button className="btn" type="submit" >Save</button>
          </form>
        </>
      ) : (
        <>
          <p>
            Name:<span> {user.name}</span>
          </p>
          <p>
            Pronouns:<span> {user.pronouns}</span>{" "}
          </p>
        </>
      )}

      {isTrainer ? (
        <div>
          <h3>Current Clients</h3>
          {myClients.map((myClient) => (
            <ul>
              <li>
                <img src={myClient.image} width="150" height="200" ></img>

                {myClient.name}

                {myClient.pronouns}
                <button
                  onClick={(event) =>
                    deleteTrainer(myClient.client_id, user.id)
                  }
                >
                      Delete Client
                </button>
              </li>
            </ul>
          ))}
          <h3>Requests</h3>

          {newRequest ? (
            <ul>
              <li>
                {user.requests}{" "}
                <button onClick={viewDetails}>View Details</button>
              </li>
            </ul>
          ) : (
            console.log("no new requests")
          )}
          <h3>Client History</h3>
        </div>
      ) : (
        // console.log('user not a trainer')
        <div>
          <h1>My Coaches</h1>

          {myTrainers.map((myTrainer) => (
            <ul>
              <li>
                {/* <p>Trainer Info</p> */}
                <img src={myTrainer.image} width="375" height="225"></img>

                {myTrainer.name}
                {myTrainer.pronouns}
                <button
                  onClick={(event) =>
                    deleteTrainer(myTrainer.id, user.id)
                  }
                >
                  Delete Trainer
                </button>
              </li>
            </ul>
          ))}
          <h3>Coach History</h3>
          <ul>
            
          </ul>
        </div>
      )}

      <LogOutButton className="btn" />
    </div>
  );
}

export default UserPage;
