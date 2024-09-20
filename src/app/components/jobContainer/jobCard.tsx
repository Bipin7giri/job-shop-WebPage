/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Job } from "@/store/types";
import { Tabs } from "@mantine/core";

import { Modal, Button, ScrollArea } from "@mantine/core";
interface selectedJobProps {
  selectedJob: Job | null;
  opened: boolean;
  onCloseModal: () => void;
}

const JobCard: React.FC<selectedJobProps> = ({
  selectedJob,
  opened,
  onCloseModal,
}) => {
  if (!selectedJob) {
    return;
  }
  return (
    <Modal
      opened={opened}
      onClose={onCloseModal}
      // scrollAreaComponent={ScrollArea.Autosize}
    >
      <div className="flex flex-row  w-full justify-between">
        <div className="w-full">
          <Tabs defaultValue="Job details">
            <Tabs.List justify="center">
              <Tabs.Tab value="Job details">Job details</Tabs.Tab>
              <Tabs.Tab value="Company">Company</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Job details">
              {" "}
              <div className="flex flex-col bg-white  justify-between p-6 ">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <h1 className=" pr-3 font-bold ">Position:</h1>
                    <ul>
                      {selectedJob.jobCategory?.name?.en}{" "}
                      {selectedJob.position?.en === "waiter"
                        ? ""
                        : selectedJob.position?.en}
                    </ul>
                  </div>
                  <h1 className="pr-3 font-bold ">Job Facility:</h1>
                  {selectedJob.facility?.en?.map((facility) => (
                    <li key={facility}>{facility}</li>
                  ))}
                </div>
                <div className="flex flex-row">
                  <h1 className="pr-3 font-bold "> Language</h1>:{" "}
                  {selectedJob.language?.en}
                </div>
                <div className="flex flex-row  justify-start">
                  <h1 className="pr-3 font-bold ">No. of Vacancy:</h1>{" "}
                  {selectedJob.numberOfVacancies}
                </div>
                <div className="flex flex-row">
                  <h1 className="pr-3 font-bold ">Experience</h1>:{" "}
                  {selectedJob.experience?.en}
                </div>
                <div className="flex flex-col ">
                  <h1 className=" font-bold pr-3">Description: </h1>
                  <p className="border border-solid overflow-x-hidden w-[22rem]">
                    {selectedJob.description?.en}
                  </p>
                </div>
              </div>
              <div className="flex flex-row  justify-between bg-white pl-6 ">
                <div className=" font-light">
                  <p>Salary</p>
                  <p>{selectedJob.salary}/Month</p>
                </div>
                <div className="pt-2">
                  <Button fullWidth>Apply Now</Button>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Company">
              <div className="flex flex-row  bg-white  p-6 mt-2 justify-between ">
                <div>
                  <div className="flex flex-row pb-3">
                    <h1 className=" font-bold "> Company Name</h1>:{" "}
                    {selectedJob.companyName?.en}
                  </div>
                  <div className="flex flex-row pb-3">
                    <h1 className=" font-bold "> Phone Number</h1>:{" "}
                    {selectedJob.phoneNumber?.en}
                  </div>
                  <div className="flex flex-row pb-3">
                    <h1 className=" font-bold "> Location</h1>:{" "}
                    {selectedJob.location?.en}
                  </div>
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </div>
        {/* <div className=" border justify-end">
          <Image src="/qrr.jpg" alt="Job shop" width={250} height={100} />
        </div> */}
      </div>
    </Modal>
  );
};
export default JobCard;
