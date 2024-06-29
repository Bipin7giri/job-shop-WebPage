import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

//import { Text, Paper } from "@mantine/core";
const JobCard: React.FC = () => {
  const [posted, setPosted] = useState(true);
  return (
    <div className="w-full cursor-pointer  transition-all duration-1000  md:w-5/12 m-4 border hover:shadow-xl rounded px-4 md:flex md:flex-wrap">
      <div className="mb-4 flex  items-center justify-center py-2 ">
        <div className="flex flex-col mx-2 px-2">
          <h1 className="text-xl md:text-2xl font-semibold">Bimarsha</h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-800">
            Sushi and Co.
          </p>
        </div>
      </div>
      <div className="mb-4 flex   items-start justify-center py-2 flex-col">
        <div className="flex  px-2 py-2 items-center justify-center ">
          <BsDot className="text-4xl font-extrabold text-indigo-600" />
          <h1 className="text-lg text-gray-900">Salary :</h1>
          <p className="text-base  font-semibold">1000 $ / month</p>
        </div>
        <div className="flex px-2 py-2 items-center  justify-center">
          <BsDot className="text-4xl font-extrabold text-indigo-600" />
          <h1 className="text-lg text-gray-900">Deadline :</h1>
          <p className="text-base  font-semibold">hello</p>
        </div>
      </div>
      <div className="mb-4 flex flex-col md:flex-wrap md:flex-row w-full justify-between  items-center ">
        <div className="mb-4 flex  items-start justify-center py-2 flex-col">
          <div className="flex px-6 rounded-2xl py-1 items-center justify-center bg-indigo-200 text-indigo-900  ">
            <p>Sushi Chef </p>
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
export default JobCard;
