import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectSearch from "react-select-search";
import Select from "react-select";

// this saga will get the trainer information by querying the id of the trainer
function* getMyTrainers(action) {
  try {
    let id = action.payload;
    const response = yield axios.get(`/api/my_trainers/${id}`);
    console.log("return trainers assigned to the user with an id of:", id);

    yield put({ type: "SET_MYTRAINERS", payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* myTrainersSaga() {
  yield takeLatest("FETCH_MYTRAINERS", getMyTrainers);
}

export default myTrainersSaga;
