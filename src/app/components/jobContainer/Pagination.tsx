import React from "react";

interface PaginationProps {
  jobsPerPage: number;
  totalJobs: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  jobsPerPage,
  totalJobs,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="inline-flex items-center -space-x-px">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href="#"
              className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === number ? "bg-blue-500 text-white" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
