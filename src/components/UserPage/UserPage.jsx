import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

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

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <h3>Profile Information</h3>
      <img onClick={editPhoto}
      src="http://www.canada-work.com/_/rsrc/1531284300421/assistants/female_generic_profile.png"
      alt="new"
      />
      <button onClick={editProfile}>Edit Profile</button>
      <p>Name:<span> {user.name}</span>    <button onClick={editName}>Edit</button></p>
      <p>Pronouns:<span> {user.pronouns}</span>    <button onClick={editPronouns}>Edit</button></p>
     
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
