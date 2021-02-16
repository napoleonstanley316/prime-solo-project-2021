import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";
import searchSaga from "./search.saga";
import requestSaga from "./request.saga";
import detailsSaga from "./details.saga";
import acceptSaga from "./accept.saga"
import myTrainersSaga from "./trainers.saga"
import deleteTrainerSaga from "./deleteTrainer.saga"

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    detailsSaga(),
    requestSaga(),
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    searchSaga(),
    acceptSaga(),
    myTrainersSaga(),
    deleteTrainerSaga(),

  ]);
}
