"use client";
import { useSelector } from "react-redux";
import { fetchData } from "./redux/jobReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Page = () => {
  const dispatch = useDispatch();
  const { value, loading, error } = useSelector((state: any) => state.job);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {value && (
        <div>
          <p>Fetched Data: {JSON.stringify(value)}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
