import React, { useEffect, useState } from "react";
import api from "@/app/api";

import { Job } from "@/store/types";
import Card from "./Card";
import { Loader } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
import JobCard from "./jobCard";
const Container: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/");
        setJobs(response.data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  //console.log(jobs);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-row justify-between  w-full">
      {/* job info */}
      <div className="w-1/3 bg-blue-300">
        {loading ? (
          <h1 className="ml-10 mt-5">
            Job Listings
            <Loader color="blue" size="xl" type="dots" />
          </h1>
        ) : (
          <ul>
            {jobs.map((job) => (
              <Card job={job} key={job.id} />
            ))}
          </ul>
        )}
      </div>
      {/* job description */}
      <div className="bg-red-400 w-2/3">{loading && <JobCard />}</div>
    </div>
  );
};

export default Container;
