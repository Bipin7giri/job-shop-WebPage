import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Job } from "@/Store/types";
import Card from "./Card";
import { Loader } from "@mantine/core";

import JobCard from "./jobCard";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Store/store";
import { fetchData } from "@/app/job/Redux/jobReducer";
const Container: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
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
  const jobsPerPage = 16;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (error) return <p>Error: {error}</p>;
  const cardItems = currentJobs.map((job) => (
    <Card
      onClickModal={open}
      job={job}
      key={job.id}
      onHandleCardClick={handleCardClick}
      isSelected={selectedJob?.id === job.id}
    />
  ));
  return (
    <div className=" max-w-full flex flex-col justify-center ml-5 mr-5 mt-2  ">
      {/* job info */}
      <div className="    ">
        <ul className="  bg-slate-100  grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid  align-middle">
          {cardItems}

          <Pagination
            jobsPerPage={jobsPerPage}
            totalJobs={data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </ul>
      </div>

      {/* job details */}
      <div className=" bg-slate-100 ">
        {!loading && (
          <JobCard
            selectedJob={selectedJob}
            opened={opened}
            onCloseModal={close}
          />
        )}
      </div>
    </div>
  );
};

export default Container;
