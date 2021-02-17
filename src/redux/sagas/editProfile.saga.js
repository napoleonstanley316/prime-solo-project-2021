import { put, takeLatest } from "redux-saga/effects";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// the purpose of this function to query the server with the id of the user that requested the trainer
// the user id come from the user reducer and is called in the UserPage under viewDetails
function* editProfile(action) {
   
  try {
    // request the id of the user that made the request to the trainer
    let id = action.payload.user;
    let name = action.payload.name;
    const response = yield axios.put(`/api/editProfile/${name}/${id}`);
    console.log("edit user with id of:", id);
    console.log("set name to:", name);
    console.log(action.payload);
    console.log(response);

    yield put({ type: "EDIT_INFO", payload: response.data });
  } catch (error) {
    console.error("error with editProfile saga", error);
  }
}

function* editProfileSaga() {
  yield takeLatest("EDIT_PROFILE", editProfile);
  
}

export default editProfileSaga;
