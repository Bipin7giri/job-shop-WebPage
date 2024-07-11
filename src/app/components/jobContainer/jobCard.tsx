import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "@/store/actions";
import { AppDispatch, RootState } from "@/store/store";
import { fetchData } from "@/app/job/redux/jobReducer";
//import { Text, Paper } from "@mantine/core";
const JobCard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.job.data);
  const loading = useSelector((state: RootState) => state.job.loading);
  const error = useSelector((state: RootState) => state.job.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    console.log("Jobs State:", data); // Log the jobs state
  }, [data]);
  // const job = data.map((job: any) => <Card job={job}key={job.id}/>);
  return (
    <>
      <h1>Description</h1>
    </>
  );
};
export default JobCard;
