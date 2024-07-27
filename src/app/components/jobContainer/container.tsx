import React, { useState } from "react";

import { Job } from "@/store/types";
import Card from "./Card";
import { Loader } from "@mantine/core";

import JobCard from "./jobCard";
import Pagination from "./Pagination";

interface selectedJobProp {
  jobs: Job[];
  onHandleSelectedJob: (job: Job) => void;
  loading: boolean;
}

const Container: React.FC<selectedJobProp> = ({
  jobs,
  onHandleSelectedJob,
  loading,
}) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleCardClick = (job: Job) => {
    if (selectedJob?.id !== job.id) {
      setSelectedJob(job);
      onHandleSelectedJob(job);
    }
  };

  // Pagination logic

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
          totalJobs={jobs.length}
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
