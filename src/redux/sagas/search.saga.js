
import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectSearch from "react-select-search";
import Select from "react-select";



// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTrainers(action) {
  

  
 
    try {
      let pronouns = action.payload
      const response = yield axios.get(`/api/search`);
      console.log('return trainer with pronouns:', pronouns);
      yield put({ type: "SET_TRAINERS", payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }

function* searchSaga() {
  yield takeLatest('SEARCH', fetchTrainers);
}

export default searchSaga;