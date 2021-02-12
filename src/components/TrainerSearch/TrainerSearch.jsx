import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectSearch from "react-select-search";
import Select from "react-select";
import TrainerList from '../TrainerList/TrainerList'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function TrainerSearch() {
  const [pronouns, setPronouns] = useState("");
  const dispatch = useDispatch();

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const trainers = useSelector((store) => store.trainers);

  const handleChange = (pronouns) => {
    console.log("search function handleChange");
    setPronouns(pronouns);
    console.log(pronouns);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("trainer search submitted");
    dispatch({
      type: "SEARCH",
      payload: {
        pronouns: pronouns,
      },
    });
  };

  return (
     <> 
    <div>
      <h2>Search for Trainers</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <select onChange={(event) => handleChange(event.target.value)}>
            Select Pronouns
            <option value="She/Her">She/Her</option>
            <option value="He/Him">He/Him</option>
            <option selected value="Non-Binary">
              Non-Binary
            </option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>

    </div>
  
    <TrainerList />
    </>
  );
}

export default TrainerSearch;
