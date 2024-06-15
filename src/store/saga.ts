import { watchFetchData } from "@/app/job/redux/jobSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchFetchData()
  ]); 
}
