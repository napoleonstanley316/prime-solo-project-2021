import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectSearch from "react-select-search";
import Select from "react-select";

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTrainers(action) {
  try {
    let specialty = action.payload;
    console.log(specialty);
    
    const response = yield axios.get(`/api/search/${specialty}`);
    console.log("return trainer with a specialty of:", specialty);
   
    console.log(action.payload);
    // console.log(specialty);
    
    yield put({ type: "SET_TRAINERS", payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* searchSaga() {
  yield takeLatest("SEARCH", fetchTrainers);
}

export default searchSaga;
