import React, { useEffect } from "react";
import { Button } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchData } from "@/app/job/redux/jobReducer";
import { Job } from "@/store/types";
import { Tabs, rem } from "@mantine/core";

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
    //console.log("Jobs State:", data);
  }, [data]);

  if (!selectedJob) {
    return <div className="p-4">Select a job to see the details</div>;
  }
  return (
    <div className=" ">
      <Tabs defaultValue="Job details">
        <Tabs.List justify="center">
          <Tabs.Tab value="Job details">Job details</Tabs.Tab>
          <Tabs.Tab value="Company">Company</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Job details">
          {" "}
          <div className="flex flex-col  bg-white  p-6 ">
            <h1 className=" font-bold pb-2">Description</h1>
            <p>{selectedJob.description.en}</p>
          </div>
          <div className="flex flex-col  bg-white  p-6 mt-5 ">
            <h1 className=" font-bold pb-2">Requirements</h1>
            <ul>{selectedJob.experience.en}</ul>
          </div>
          <div className="flex flex-col  bg-white  p-6 mt-5 ">
            <h1 className=" font-bold pb-2">Job Facility</h1>
            <li>sdfgs</li>
            <li>sdfgs</li>
            <li>sdfgs</li>
            <li>sdfgs</li>
          </div>
          <div className="flex flex-col  bg-white  p-6 mt-5 ">
            <p className="flex flex-row">
              <h1 className=" font-bold ">Number of Vacancy</h1>:{" "}
              {selectedJob.numberOfVacancies}
            </p>
            <p className="flex flex-row">
              <h1 className=" font-bold ">Experience</h1>:{" "}
              {selectedJob.experience.en}
            </p>
            <p className="flex flex-row">
              <h1 className=" font-bold "> Language</h1>:{" "}
              {selectedJob.language.en}
            </p>
          </div>
          <div className="flex flex-row  justify-between bg-white  p-6 mt-5 ">
            <div className=" font-light">
              <p>Salary</p>
              <p>{selectedJob.salary}/Month</p>
            </div>
            <div>
              <Button fullWidth>Apply Now</Button>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="Company">
          <div className="flex flex-row  bg-white  p-6 mt-5 justify-between ">
            <div>
              <p className="flex flex-row pb-3">
                <h1 className=" font-bold "> Company Name</h1>:{" "}
                {selectedJob.companyName.en}
              </p>
              <p className="flex flex-row pb-3">
                <h1 className=" font-bold "> Phone Number</h1>:{" "}
                {selectedJob.phoneNumber.en}
              </p>
              <p className="flex flex-row pb-3">
                <h1 className=" font-bold "> Location</h1>:{" "}
                {selectedJob.location.en}
              </p>
            </div>
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
export default JobCard;
