import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TrainerList() {
  // reducer that holds trainers from search route results.rows
  const trainers = useSelector((store) => store.trainers);


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
          {trainers.map((trainer) => {
            return (
              <tr>
                <td>{trainer.username}</td>
                <td>{trainer.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TrainerList;
