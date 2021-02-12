
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.



function TrainerList() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  // const store = useSelector((store) => store);
  // const [heading, setHeading] = useState('Functional Component');
  const dispatch = useDispatch();
  const trainers = useSelector((store) => store.trainers);
  // const movies = useSelector((store) => store.movies);

  // useEffect(() => {
  //   dispatch({ type: "SET_TRAINERS" });
 
  // }, []);

  return (
    <div>
      <h2>Search Results</h2>
      <table>
                <thead>
                    <tr>
                        <th>Trainer Name</th>
                        
                        <th>Trainer ID</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map(trainer => {
                        return (
                            <tr>
                                <td>
                                    {trainer.username}
                                </td>
                                <td>
                                    {trainer.id}
                                </td>
                            </tr>
                        )
                        // return <StudentDetail key={student.id} student={student} />
                    })}
                </tbody>
            </table>
    </div>
  );
}

export default TrainerList;
    //  <ul>
    //         {trainers.map((trainer) => (
              
    //             <li>
    //               {trainer.username}
    //             </li>
              
    //         ))}
    //       </ul>