import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// the purpose of this function to query the server with the id of the user that requested the trainer
// the user id come from the user reducer and is called in the UserPage under viewDetails
function* requestDetails(action) {
    try {
        // request the id of the user that made the request to the trainer
      let id = action.payload;
      const response = yield axios.get(`/api/details/${id}`);
      console.log('return user with id of:', id);
      console.log(action.payload);
      
      yield put({ type: "SET_DETAILS", payload: response.data });
    } catch (error) {
      console.error('error with details saga', error);
    }
}


function* detailsSaga() {
  yield takeLatest('REQ_DETAILS', requestDetails);
}

export default detailsSaga;