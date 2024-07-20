import React, { useState } from "react";

import { Job } from "@/store/types";
import Card from "./Card";
import { Loader } from "@mantine/core";
import { ScrollArea } from "@mantine/core";
import JobCard from "./jobCard";

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
          <ul className="w-full  ">
            {jobs.map((job) => (
              <Card
                job={job}
                key={job.id}
                onHandleCardClick={handleCardClick}
                isSelected={selectedJob?.id === job.id}
              />
            ))}
          </ul>
        )}
      </div>

      {/* job description */}
      <div className=" w-2/3 bg-slate-100">
        {!loading && <JobCard selectedJob={selectedJob} />}
      </div>
    </div>
  );
};

export default Container;
