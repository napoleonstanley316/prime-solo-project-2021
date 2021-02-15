import React from 'react';
import { useEffect,  } from "react";
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import RequestDetails from '../RequestDetails/RequestDetails.jsx'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [isTrainer, setIsTrainer] = React.useState(false);
  const [newRequest, setNewRequest] = React.useState(false);


const editName = () => {
  console.log('edit name button clicked');
}

const editPronouns = () => {
  console.log('edit pronouns button clicked');
}

const editPhoto = () => {
  console.log('edit photo clicked');
}

const editProfile = () => {
  console.log('edit profile clicked');
}

const viewDetails = () => {
  // this saga route should get the details (profile information) of user that created request for trainer
  console.log("view details of request");
  console.log('payload should be:', user.req_id);
  dispatch({
    type: "REQ_DETAILS",
    payload: user.req_id,
    })
    history.push('/reqDetails')
};


useEffect(() => {
if (user.trainer === true) {
setIsTrainer(!isTrainer)
}

}, []);

useEffect(() => {
  if (user.requests === 'New Request') {
  setNewRequest(!newRequest)
  }
  
  }, []);



  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <h3>Profile Information</h3>
      <p><img src={user.image}></img> </p>
    
      <button onClick={editProfile}>Edit Profile</button>
      <p>Name:<span> {user.name}</span>    <button onClick={editName}>Edit</button></p>
      <p>Pronouns:<span> {user.pronouns}</span>    <button onClick={editPronouns}>Edit</button></p>
      {isTrainer ? (
        <div>
     <h3>Requests</h3>
     {newRequest ? (
     <ul>
       <li>
         {user.requests} <button onClick={viewDetails}>View Details</button>
       </li>
     </ul>
     ) : (

       console.log('no new requests')


     )}
</div>
      ) : (
        console.log('user not a trainer')
      )}
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;



// src="http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png"
// alt="new"

