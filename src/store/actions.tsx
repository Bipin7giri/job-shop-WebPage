// Action Types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

import { Job } from "./types";

export interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: Job;
}

export interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}
// Action Creators
export const fetchDataRequest = (data: Job) => ({
  type: FETCH_DATA_REQUEST,
  payload: data,
});

export const fetchDataSuccess = (data: Job) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
