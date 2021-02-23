import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectSearch from "react-select-search";
import Select from "react-select";
import TrainerList from "../TrainerList/TrainerList.jsx";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import './TrainerSearch.css'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function TrainerSearch() {

  const theme = createMuiTheme({
    palette: {
type: "dark",
    },
  });
  const [pronouns, setPronouns] = useState("");
  const [specialty, setSpecialty] = useState("");

  const dispatch = useDispatch();

  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const trainers = useSelector((store) => store.trainers);

  const handleChange = (event) => {
    console.log("search function handleChange");
    setPronouns(pronouns);
    setSpecialty(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(specialty);
    console.log("trainer search submitted");
    dispatch({
      type: "SEARCH",
      payload: specialty,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
   

      <div>
        <h2>Search for Trainers</h2>
        <form  onSubmit={handleSubmit} >
          
            <select
              value={specialty}
              onChange={(event) => handleChange(event.target.value)}
            >
              Select Pronouns
              <option>Select Trainer Type</option>
              <option value="personal">Personal Training</option>
              <option value="nutrition">Nutrition Coaching</option>
              <option value="mind">Mind & Body</option>
              <option value="health">Health Coaching</option>
            </select>
          
          <input type="submit" value="Submit" />
        </form>
      <TrainerList />
   </div>
</Paper>
    </ThemeProvider> 
  );
}
export default TrainerSearch;
    