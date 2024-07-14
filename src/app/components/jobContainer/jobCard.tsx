import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "@/store/actions";
import { AppDispatch, RootState } from "@/store/store";
import { fetchData } from "@/app/job/redux/jobReducer";
//import { Text, Paper } from "@mantine/core";
import { Job } from "@/store/types";

interface selectedJobProps {
  selectedJob: Job | null;
}
const JobCard: React.FC<selectedJobProps> = ({ selectedJob }) => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.job.data);
  const loading = useSelector((state: RootState) => state.job.loading);
  const error = useSelector((state: RootState) => state.job.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    console.log("Jobs State:", data);
  }, [data]);
  // const job = data.map((job: any) => <Card job={job}key={job.id}/>);
  if (!selectedJob) {
    return <div className="p-4">Select a job to see the details</div>;
  }
  return (
    <div className="flex justify-start flex-col mt-5 ">
      <div className="flex flex-col  bg-white  p-6 h-32">
        <h1 className=" font-bold pb-2">Description</h1>
        <p>{selectedJob.description.en}</p>
      </div>
      <div className="flex flex-col  bg-white  p-6 mt-5 h-32">
        <h1 className=" font-bold pb-2">Requirements</h1>
        <ul>{selectedJob.experience.en}</ul>
        <ul></ul>
        {/* <ul>{job.facility.en}</ul> */}
        <ul></ul>
      </div>
      <div className="flex flex-row  bg-white  p-6 mt-5 justify-between h-32">
        <div>
          <p>{selectedJob.salaryType.en}</p>
          <p>{selectedJob.salary}/month</p>
        </div>
        <div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
