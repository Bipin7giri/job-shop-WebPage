import React, { useEffect, useState } from "react";
import api from "@/app/api"; // Adjust the import path as necessary
import JobCard from "./jobCard";

const DataDisplayComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/jobs");
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Job Lists</h1>
      <ul>
        {data.map((item) => (
          <JobCard key={} />
        ))}
      </ul>
    </div>
  );
};

export default DataDisplayComponent;
