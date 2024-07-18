import { MdOutlineInfo } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Job } from "@/store/types";
interface typeJob {
  job: Job;
  onHandleCardClick: (job: Job) => void;
  isSelected: boolean;
}

const Card: React.FC<typeJob> = ({ job, isSelected, onHandleCardClick }) => {
  //convert the backend date to todays date
  const timeAgo = (timestamp: string): string => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffTime = now.getTime() - date.getTime();

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

  return (
    <div
      className={`mx-2 my-5 rounded-md p-5 shadow-md hover:shadow-xl border-l-2 border-r-2 ${
        isSelected
          ? " bg-slate-100 border-blue-500"
          : " bg-white border-red-500"
      }`}
      onClick={() => {
        onHandleCardClick(job);
      }}
    >
      <div className="flex flex-row justify-between">
        <div>
          <h1
            className=' font-medium 
               "text-black-500"
            '
          >
            {job.position.en}
          </h1>
        </div>
        <div>
          <MdOutlineInfo size={29} color={"black"} />
        </div>
      </div>
      <ul className="flex flex-col justify-between">
        <li
          className="  
          text-black font-extralight
          "
        >
          {job.companyName.en}
        </li>
        <li className="flex flex-row pt-3">
          {" "}
          <p className="pt-1 mr-2">
            <IoLocationSharp />
          </p>
          {job.location.en}
        </li>
      </ul>
      <p className=" border mt-2"></p>
      <ul className="pt-5 flex flex-row justify-between font-extralight text-sm text-black">
        <li>Full time</li>
        <li>{timeAgo(timestamp)}</li>
        <li>{job.salary} Euro/Month</li>
      </ul>
    </div>
  );
};

export default Card;
