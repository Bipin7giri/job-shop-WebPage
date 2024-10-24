// src/store/reducers.js
import { combineReducers } from "redux";
import { jobSlice } from "@/app/job/redux/jobReducer";

const rootReducer = combineReducers({
  job: jobSlice.reducer,
});

export default rootReducer;
