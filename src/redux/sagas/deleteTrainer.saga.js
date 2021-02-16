import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { eventChannel } from "redux-saga";

function* deleteTrainer(action) {
  try {
    // request the id of the user that made the request to the trainer
     const user = action.payload.user;
    const trainer = action.payload.event;
   

    const response = yield axios.delete(`/api/deleteTrainer/${user}/${trainer}`);
     console.log("update user with id of:", user);
    console.log("delete trainer with id of:", trainer);
   

  
    console.log(
      "arrived at deleteTrainer with the following data:",
      action.payload
    );

    yield put({ type: "DELETE_POOL", payload: response.data });
  } catch (error) {
    console.error("error with deleteTrainerSaga", error);
  }
}

function* deleteTrainerSaga() {
  yield takeLatest("DELETE_TRAINER", deleteTrainer);
}

export default deleteTrainerSaga;
