import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/Store/types";
interface JobState {
  data: Job[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

const initialState: JobState = {
  data: [],
  loading: false,
  error: null,
  searchTerm: "",
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
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { fetchData, fetchDataSuccess, fetchDataFailure, setSearchTerm } =
  jobSlice.actions;

export default jobSlice.reducer;
