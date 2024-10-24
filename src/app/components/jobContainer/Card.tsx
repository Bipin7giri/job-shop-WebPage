import { IoLocationSharp } from "react-icons/io5";
import { Job } from "@/store/types";
interface typeJob {
  job: Job;
  onHandleCardClick: (job: Job) => void;
  isSelected: boolean;
  onClickModal: (open: any) => void;
}

const Card: React.FC<typeJob> = ({
  job,
  isSelected,
  onHandleCardClick,
  onClickModal,
}) => {
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
      className={`mx-2 cursor-pointer my-1 rounded-md p-3 shadow-md hover:shadow-xl border-l-2 border-r-2 
        
           
            ${isSelected ? " bg-slate-100 border-blue-500" : " bg-white "}`}
      onClick={() => {
        onHandleCardClick(job);
        onClickModal(open);
      }}
    >
      <div className="flex flex-row   truncate ">
        <div>
          <h1
            className=" font-medium 
               text-black-500 
            "
          >
            {job.position?.en}
          </h1>
        </div>
        {/* <div>
          <MdOutlineInfo size={29} color={"black"} />
        </div> */}
      </div>
      <ul className="flex flex-col justify-between">
        {/* <li
          className="  
          text-black font-extralight
          "
        >
          {job.companyName.en}
        </li> */}
        <li className="flex flex-row  justify-between">
          {" "}
          <p className="flex flex-row">
            <p className="pt-1">
              <IoLocationSharp />
            </p>
            {job.location?.en}
          </p>
          <li>Full time</li>
        </li>
      </ul>
      <p className=" border "></p>
      <ul className="pt-1 flex flex-row justify-between font-extralight text-sm text-black">
        <li>{timeAgo(timestamp)}</li>
        <li>{job.salary} Euro/Month</li>
      </ul>
    </div>
  );
};

export default Card;
