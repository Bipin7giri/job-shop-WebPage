import { useState } from "react";
import { BsDot } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Job } from "@/store/types";

interface CardProps {
  job: Job; // Define props as type Job
}
const Card: React.FC<CardProps> = ({ job }) => {
  const [posted, setPosted] = useState(true);
  return (
    <div className="w-full cursor-pointer   bg-slate-50 transition-all duration-1000  md:w-5/12 m-4 border hover:shadow-xl rounded px-8 md:flex md:flex-wrap">
      <div className="mb-4 flex  items-center justify-center py-2 ">
        <div className=" mx-2 px-2">
          <h1 className="text-xl md:text-2xl font-semibold">
            {job.position.en}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            {job.companyName.en}
          </p>
        </div>
      </div>
      <div className="mb-4 flex   items-start justify-center py-2 flex-col">
        <div className="flex  px-2 py-2 items-center justify-center ">
          <BsDot className="text-4xl font-extrabold text-indigo-600" />
          <h1 className="text-lg text-gray-900">Experience :</h1>
          <p className="text-base  font-semibold">{job.experience.en}</p>
        </div>
        <div className="flex px-2 py-2 items-center  justify-center">
          <BsDot className="text-4xl font-extrabold text-indigo-600" />
          <h1 className="text-lg text-gray-900">Vacancy :</h1>
          <p className="text-base  font-semibold">{job.numberOfVacancies}</p>
        </div>
      </div>
      <div className="mb-4 flex flex-col md:flex-wrap md:flex-row w-full justify-between  items-center ">
        <div className="mb-4 flex  items-start justify-center py-2 flex-col">
          <div className="flex px-6 rounded-2xl py-1 items-center justify-center bg-indigo-200 text-indigo-900  ">
            <p>{job.location.en}</p>
          </div>
        </div>
        {posted ? (
          <button className="my-2 py-2 px-4  border border-indigo-600   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold">
            View Applications <AiOutlineArrowRight className="mx-2 text-xl" />
          </button>
        ) : (
          <button className="my-2 py-2 px-4  border border-indigo-600   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold">
            View Detail <AiOutlineArrowRight className="mx-2 text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
