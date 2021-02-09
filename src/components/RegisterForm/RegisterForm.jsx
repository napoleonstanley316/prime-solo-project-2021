import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const [isTrainer, setIsTrainer] = useState(false);
  const [trainerToggle, setTrainerToggle] = React.useState(false);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
        trainer:  trainerToggle,
      },
    });
  }; // end registerUser

  const setTrainer = () => {
    // change state of isTrainer
    console.log("set isTrainer function");
    setIsTrainer(!isTrainer);
    setTrainerToggle(!trainerToggle);
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
        <input type="checkbox" 
        onChange={setTrainer} 
        />
      </label>

      {isTrainer ? (
        <div>
          <label>
            {" "}
            Personal Trainer
            <input type="checkbox" />
          </label>

          <label>
            {" "}
            Nutrition
            <input type="checkbox" />
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
