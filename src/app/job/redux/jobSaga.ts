import { takeLatest, call, put } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataFailure } from "./jobReducer";
import api from "@/app/api";

function* fetchDataSaga(): Generator<any, void, any> {
  try {
    debugger;
    const response = yield call(api.get, "/products");
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* watchFetchData() {
  yield takeLatest("job/fetchData", fetchDataSaga);
}
