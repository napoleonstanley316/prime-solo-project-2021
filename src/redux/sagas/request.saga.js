import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// this saga will go to the user who has a matching id from the payload coming from the TrainerList component


function* requestTrainer(action) {
    try {
      let trainer = action.payload.trainer;
      let user = action.payload.user;
      const request = yield axios.post(`/api/request/${trainer}/${user}`);
      console.log('send request to user with an id of:', trainer);
      console.log('request was sent from user with an id of:', user);
      
      
    } catch (error) {
      console.error(error);
    }
}


function* requestSaga() {
  yield takeLatest('REQUEST', requestTrainer);
}

export default requestSaga;