import { useState } from "react";

import { Job } from "@/store/types";
import { MdOutlineInfo } from "react-icons/md";

interface typeJob {
  job: Job; // Define props as type Job
}
const Card: React.FC<typeJob> = ({ job }) => {
  const [posted, setPosted] = useState(true);

  //time calculation on days
  const timeAgo = (timestamp: string): string => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffTime = now.getTime() - date.getTime();

    // Calculate the difference in days
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "today";
    } else if (diffDays === 1) {
      return "one day ago";
    } else {
      return `${diffDays} days ago`;
    }
  };
  const timestamp = job.createdAt;
  //console.log(timeAgo(timestamp));

  return (
    <div className="bg-white mx-2 my-5 rounded-md p-5 shadow-md hover:shadow-xl border-l-2 border-r-2 border-red-500">
      <div className=" flex flex-row justify-between">
        <div className="">
          <h1 className="mb-3 font-medium text-red-500">FULL TIME</h1>
        </div>
        <div className=" ">
          <MdOutlineInfo size={29} color="black" />
        </div>
      </div>
      <ul className="flex flex-row  justify-between">
        <li className=" font-bold mb-2">{job.position.en}</li>
      </ul>
      <ul className="flex flex-row justify-between font-extralight text-sm ">
        <li className=" ">{job.location.en}</li>

        <li>Experience: {job.experience.en}</li>
        <li>{job.salaryType.en}</li>
        <li>{timeAgo(timestamp)}</li>
      </ul>
    </div>
  );
};
export default Card;
