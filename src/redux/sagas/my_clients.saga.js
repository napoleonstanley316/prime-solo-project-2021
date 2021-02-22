import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectSearch from "react-select-search";
import Select from "react-select";

// this saga will get the trainer information by querying the id of the trainer
function* getMyClients(action) {
  try {
    let id = action.payload;
    const response = yield axios.get(`/api/my_clients/${id}`);
    console.log("return clients from the trainer with an id of:", id);

    yield put({ type: "SET_MYCLIENTS", payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* myClientsSaga() {
  yield takeLatest("FETCH_MYCLIENTS", getMyClients);
}

export default myClientsSaga;
