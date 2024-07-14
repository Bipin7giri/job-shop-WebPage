"use client";

import Container from "./components/jobContainer/container";
import { Job } from "@/store/types";
import NavBar from "./components/NavBar/navBar";
import { useState, useEffect } from "react";
import api from "./api";
export default function LandingPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  //api
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

  const handleSelectedJob = (job: Job): void => {
    setSelectedJob(job);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <Container
        jobs={jobs}
        onHandleSelectedJob={handleSelectedJob}
        loading={loading}
      />
    </>
  );
}
