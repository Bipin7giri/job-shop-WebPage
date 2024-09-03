// src/store/reducers.js
import { combineReducers } from "redux";
import { jobSlice } from "@/app/job/Redux/jobReducer";

const rootReducer = combineReducers({
  job: jobSlice.reducer,
});

export default rootReducer;
