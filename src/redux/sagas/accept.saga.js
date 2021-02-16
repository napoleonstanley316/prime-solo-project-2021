import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* acceptUser(action) {
  try {
    // request the id of the user that made the request to the trainer
    let details = action.payload.details;
    let user = action.payload.user;

    const response = yield axios.post(`/api/accept/${details}/${user}`);
    console.log("accept user with id of:", details, user);
   
 // console.log("update user with id of:", user);
    console.log(action.payload);

    yield put({ type: "SET_ACCEPT", payload: response.data });
  } catch (error) {
    console.error("error with details saga", error);
  }
}

function* acceptSaga() {
  yield takeLatest("ACCEPT", acceptUser);
}

export default acceptSaga;
