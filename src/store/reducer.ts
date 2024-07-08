// src/store/reducers.js
import { Job } from "./types";
import { combineReducers } from "redux";
import { jobSlice } from "@/app/job/redux/jobReducer";

const rootReducer = combineReducers({
  job: jobSlice.reducer,
});

export default rootReducer;
