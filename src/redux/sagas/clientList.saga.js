import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectSearch from "react-select-search";
import Select from "react-select";

// this saga will get the trainer information by querying the id of the trainer
function* listMyClients(action) {
  try {
    let id = action.payload.myClients;
    const response = yield axios.get(`/api/clientList/${id}`);
    console.log("list all clients for this trainer with these ids:", id);

    yield put({ type: "LIST_MYCLIENTS", payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* clientListSaga() {
  yield takeLatest("RETURN_MYCLIENTS", listMyClients);
}

export default clientListSaga;






