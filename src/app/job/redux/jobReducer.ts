import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/store/types";
interface JobState {
  data: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: JobState = {
  data: [],
  loading: false,
  error: null,
};
export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<Job[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchData, fetchDataSuccess, fetchDataFailure } =
  jobSlice.actions;

export default jobSlice.reducer;
