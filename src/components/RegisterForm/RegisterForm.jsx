import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const [isTrainer, setIsTrainer] = useState(false);
  const [trainerToggle, setTrainerToggle] = React.useState(false);
  const [isSheHer, setIsSheHer] = React.useState(false);
  const [isHeHim, setIsHeHim] = React.useState(false);
  const [isNonBinary, setIsNonBinary] = React.useState(false);
  const [personalTrainer, setPersonalTrainer] = React.useState(false);
  const dispatch = useDispatch();
  const [specialties, setSpecialties] = React.useState([]);

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
        trainer: trainerToggle,
        she_her: isSheHer,
        he_him: isHeHim,
        non_binary: isNonBinary,
       
      },
    });
  }; // end registerUser

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

  const persTrainer = (event) => {
    console.log(" personal trainer specialty set");
    console.log(event.target.value);
    setSpecialties([event.target.value]);
    setPersonalTrainer(!personalTrainer);
  };

  const nutrition = (event) => {
    console.log("nutrition specialty set");
    console.log(event.target.value);
    setSpecialties([event.target.value]);
  };

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

      <label>
        Check if registering as Coach/Trainer
        <input type="checkbox" onChange={setTrainer} />
      </label>

      {isTrainer ? (
        <div>
          <h4>Select Pronouns</h4>
          {/* // logic to set she_her */}
          <label>
            {" "}
            She/Her
            <input type="checkbox" onChange={setSheHer} />
          </label>
          {/* logic to set he_him */}
          <label>
            {" "}
            He/Him
            <input type="checkbox" onChange={setHeHim} />
          </label>
          {/* logic to set non binary */}
          <label>
            {" "}
          Non-Binary
            <input type="checkbox" onChange={setNonBinary} />
          </label>

          <label>
            {" "}
            Personal Trainer
            <input type="checkbox" value="1" onChange={persTrainer} />
          </label>

          <label>
            {" "}
            Nutrition
            <input type="checkbox" value="2" onChange={nutrition} />
          </label>

          <label>
            {" "}
            Health Coach
            <input type="checkbox" />
          </label>

          <label>
            {" "}
            Mind & Body
            <input type="checkbox" />
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
