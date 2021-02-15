import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// this saga will go to the user who has a matching id from the payload coming from the TrainerList component


function* requestTrainer(action) {
    try {
      let id = action.payload;
      yield axios.put(`/api/request/${id}`);
      console.log(id);
      
    } catch (error) {
      console.error(error);
    }
}


function* requestSaga() {
  yield takeLatest('REQUEST', requestTrainer);
}

export default requestSaga;