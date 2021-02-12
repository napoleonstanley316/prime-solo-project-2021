
import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchTrainers() {
    try {
      const response = yield axios.get("/api/search");
      yield put({ type: "SET_TRAINERS", payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }

function* searchSaga() {
  yield takeLatest('SEARCH', fetchTrainers);
}

export default searchSaga;