import { MdOutlineInfo } from "react-icons/md";
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
        isSelected ? "bg-blue-500 border-blue-500" : "bg-white border-red-500"
      }`}
      onClick={() => {
        onHandleCardClick(job);
      }}
    >
      <div className="flex flex-row justify-between">
        <div>
          <h1
            className={`mb-3 font-medium ${
              isSelected ? "text-white" : "text-red-500"
            }`}
          >
            FULL TIME
          </h1>
        </div>
        <div>
          <MdOutlineInfo size={29} color={isSelected ? "white" : "black"} />
        </div>
      </div>
      <ul className="flex flex-row justify-between">
        <li className={`font-bold mb-2 ${isSelected ? "text-white" : ""}`}>
          {job.position.en}
        </li>
      </ul>
      <ul
        className={`flex flex-row justify-between font-extralight text-sm ${
          isSelected ? "text-white" : ""
        }`}
      >
        <li>{job.location.en}</li>
        <li>Experience: {job.experience.en}</li>
        <li>{job.salaryType.en}</li>
        <li>{timeAgo(timestamp)}</li>
      </ul>
    </div>
  );
};

export default Card;
