import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import SelectSearch from 'react-select-search';
import Select from 'react-select'



// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function TrainerSearch() {


  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  const handleChange = () => {
console.log('search function handleChange');
console.log(event.target.value)

  }


const handleSubmit = () => {
  console.log('trainer search submitted')
  
}
 
  return (
    <div>
      <h2>Search for Trainers</h2>
      <form onSubmit={handleSubmit}>
        <label>
      <select defaultValue="Select Pronouns" onChange={(event) => handleChange(event.target.value)}>Select Pronouns
        
  <option value="She/Her">She/Her</option>
  <option value="He/Him">He/Him</option>
  <option selected value="Non-Binary">Non-Binary</option>
</select></label>
  <input type="submit" value="Submit" />
</form>
    </div>
 
  );
}

export default TrainerSearch;

