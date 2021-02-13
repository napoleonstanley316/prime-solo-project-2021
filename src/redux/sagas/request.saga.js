import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// this saga will go to the user who has a matching id from the payload coming from the TrainerList component


function* requestSaga() {
  yield takeLatest('REQUEST', requestTrainer);
}

export default requestSaga;