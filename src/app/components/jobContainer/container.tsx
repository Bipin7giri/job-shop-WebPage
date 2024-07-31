import React, { useEffect, useState } from "react";

import { Job } from "@/store/types";
import Card from "./Card";
import { Loader } from "@mantine/core";

import JobCard from "./jobCard";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchData } from "@/app/job/redux/jobReducer";

const Container: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.job.data);
  const loading = useSelector((state: RootState) => state.job.loading);
  const error = useSelector((state: RootState) => state.job.error);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleCardClick = (job: Job) => {
    if (selectedJob?.id !== job.id) {
      setSelectedJob(job);
    }
  };

  // Pagination logic

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (error) return <p>Error: {error}</p>;
  const cardItems = currentJobs.map((job) => (
    <Card
      job={job}
      key={job.id}
      onHandleCardClick={handleCardClick}
      isSelected={selectedJob?.id === job.id}
    />
  ));
  return (
    <div className="flex flex-row justify-between  w-full ">
      {/* job info */}

      <div className="w-1/3 bg-slate-100 ">
        {loading ? (
          <h1 className="ml-10 mt-5">
            Job Listings
            <Loader color="blue" size="xl" type="dots" />
          </h1>
        ) : (
          <ul className="w-full  ">{cardItems}</ul>
        )}
        <Pagination
          jobsPerPage={jobsPerPage}
          totalJobs={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>

      {/* job description */}
      <div className=" w-2/3 bg-slate-100">
        {!loading && <JobCard selectedJob={selectedJob} />}
      </div>
    </div>
  );
};

export default Container;
