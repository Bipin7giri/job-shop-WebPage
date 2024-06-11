import React, { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the FaSearch icon

interface SearchInputProps {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  return (
    <div className="relative  text-gray-600">
      <input
        type="text"
        className="bg-[#EDF3F8] h-9 font-semibold text-black pl-12 pr-5 rounded-md text-sm focus:outline-none w-[300px] shadow-xs focus:shadow-xs"
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="absolute left-3 top-3">
        <FaSearch /> {/* Use the FaSearch icon */}
      </div>
      <button
        type="submit"
        className="absolute right-0 top-0 mt-3 mr-4"
        style={{ color: '#555', backgroundColor: 'transparent' }}
      >
  
      </button>
    </div>
  );
};

export default SearchInput;
