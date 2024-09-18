import { takeLatest, call, put } from "redux-saga/effects";
import { fetchDataSuccess, fetchDataFailure, fetchData } from "./jobReducer";
import api from "@/app/api";
import { AxiosResponse } from "axios";

import { Job } from "@/Store/types";
function* fetchDataSaga(): Generator<any, void, any> {
  try {
    const response: AxiosResponse<{ data: Job[] }> = yield call(
      api.get,
      "/jobs"
    );

    yield put(fetchDataSuccess(response.data.data));
  } catch (error: any) {
    console.error("API Error:", error);
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeLatest(fetchData.type, fetchDataSaga);
}

export default function* rootSaga() {
  yield watchFetchData();
}
