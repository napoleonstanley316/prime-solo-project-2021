import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const [isTrainer, setIsTrainer] = useState(false);
  const [trainerToggle, setTrainerToggle] = React.useState(false);
  const [isSheHer, setIsSheHer] = React.useState(false);
  const [isHeHim, setIsHeHim] = React.useState(false);
  const [isNonBinary, setIsNonBinary] = React.useState(false);
  const [isPersonal, setIsPersonal] = React.useState(false);
  const [isNutrition, setIsNutrition] = React.useState(false);
  const [isMind, setIsMind] = React.useState(false);
  const [isHealth, setIsHealth] = React.useState(false);
  const [pronouns, setPronouns] = React.useState("");
  const dispatch = useDispatch();
  const [specialties, setSpecialties] = useState([]);

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        name: name,
        username: username,
        password: password,
        trainer: trainerToggle,
        she_her: isSheHer,
        he_him: isHeHim,
        non_binary: isNonBinary,
        personal: isPersonal,
        nutrition: isNutrition,
        health: isHealth,
        mind: isMind,
        pronouns: pronouns,
        // specialties: specialties,
      },
    });
  }; // end registerUser




  const handleChange = (event) => {
    console.log("set pronouns function handleChange");
    setPronouns(event);
    
  };









  const setSheHer = () => {
    console.log("she/her status is set");
    setIsSheHer(!isSheHer);
  };

  const setHeHim = () => {
    console.log("he/him status is set");
    setIsHeHim(!isHeHim);
  };

  const setNonBinary = () => {
    console.log("nonBinary status is set");
    setIsNonBinary(!isNonBinary);
  };

  const setTrainer = () => {
    // change state of isTrainer
    console.log("set isTrainer function");
    setIsTrainer(!isTrainer);
    setTrainerToggle(!trainerToggle);
  };

  // specialties should be an array, but is currently only logging the last specialty that is checked
  // need to figure out how to get all specialties that are checked in the array
  const setPersonal = () => {
    setIsPersonal(!isPersonal);
    console.log(isPersonal);
  };

  const setNutrition = () => {
    console.log('clicked nutrition');
    setIsNutrition(!isNutrition);
    console.log(isNutrition);
  };

  const setMind = () => {
    console.log('clicked mind');
    setIsMind(!isMind);
    console.log(isMind);
  };

  const setHealth = () => {
    console.log('clicked health');
    setIsHealth(!isHealth);
    console.log(isHealth);
  };

  // const newSpecialty = event.target.value;
  // console.log(" trainer specialty set to:", event.target.value);
  // show the array in the console
  // setSpecialties([...specialties, event.target.value]);

  const setUserPronouns = (event) => {
    console.log(" pronouns set to:", event.target.value);
    // show the array in the console
    setPronouns([...pronouns, event.target.value]);
  };

  console.log(specialties);
  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label htmlFor="username">
          Name:
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>


      <div>
        <h2>Pronouns</h2>
 
            <select
              value={pronouns}
              onChange={(event) => handleChange(event.target.value)}
            >
              Select Pronouns
              <option>Select Pronouns</option>
              <option value="She/Her">She/Her</option>
              <option value="He/Him">He/Him</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>

      </div>



       {/* <form onSubmit={handleSubmit}>
          <label> */}

          {/* </label>
          <input type="submit" value="Submit" />
        </form> */}














      <div>
        <h4>Select Pronouns</h4>
        {/* // logic to set she_her */}
        <label>
          {" "}
          She/Her
          <input type="checkbox" value="She/Her" onChange={setUserPronouns} />
        </label>
        {/* logic to set he_him */}
        <label>
          {" "}
          He/Him
          <input type="checkbox" value="He/Him" onChange={setUserPronouns} />
        </label>
        {/* logic to set non binary */}
        <label>
          {" "}
          Non-Binary
          <input
            type="checkbox"
            value="Non-Binary"
            onChange={setUserPronouns}
          />
        </label>
      </div>

      <h3>Trainer Registration</h3>

      <label>
        Check if registering as Coach/Trainer
        <input type="checkbox" onChange={setTrainer} />
      </label>

      {isTrainer ? (
        <div>
          <label>
            Personal Trainer
            <input type="checkbox" value="personal" onChange={setPersonal} />
          </label>

          <label>
            Nutrition
            <input type="checkbox" value="nutrition" onChange={setNutrition} />
          </label>

          <label>
            Health Coach
            <input type="checkbox" value="health" onChange={setHealth} />
          </label>

          <label>
            {" "}
            Mind & Body
            <input type="checkbox" value="mind" onChange={setMind} />
          </label>
        </div>
      ) : (
        <p>User Type: User</p>
      )}

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
      <div></div>
    </form>
  );
}

export default RegisterForm;
