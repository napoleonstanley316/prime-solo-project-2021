import React, { useState } from "react";
import { useSelector } from "react-redux";

// this page will show the details of the person who made a request to the trainer
function RequestDetails(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState("Functional Component");
  const details = useSelector((state) => state?.details[0]);
  console.log("request was made by:", [details]);

  return (
    <div>
      <img src={details?.image} />
      <h3>Name:{details?.name} </h3>
      <p>Pronouns: {details?.pronouns}</p>
    </div>
  );
}

export default RequestDetails;
// <div>
//   <h2>{heading}</h2>

//   <h5>Details of Request</h5>
//   <p></p>
// </div>
