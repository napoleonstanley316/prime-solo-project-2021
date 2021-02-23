import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './RequestDetails.css'

// this page will show the details of the person who made a request to the trainer
function RequestDetails(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");
  const [isAccepted, setIsAccepted] = useState(false);
  const details = useSelector((state) => state?.details[0]);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log("request was made by:", [details]);

  const handleAccept = (details, user) => {
    // setIsAccepted(!isAccepted);
console.log(details);
    // console.log("accept request clicked", details, user);
    setIsAccepted(!isAccepted);

    dispatch({
      type: "ACCEPT",
      payload: {
        
        details,
        user,
     
      },
    });
  };

  return (

    
    <div className="paper">
      <img src={details?.image} />
      <h3>Name:  {details?.name} </h3>
      <p>Pronouns: {details?.pronouns}</p>
      {isAccepted ? (
          <td>Accepted</td> 
          ) : ( 
      <button onClick={(event) => handleAccept(details.id, user.id)}>
        Accept Request
      </button>
          )}
      <button>Decline Request</button>
    </div>
  );
}

export default RequestDetails;
