import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClickOutside } from "../Hooks/useClickOutside";
import close_cross from "../Assets/Icons/close_cross.png";

export const Search = ({ setSearchSection }) => {
  const { ref } = useClickOutside(setSearchSection);

  const navigate = useNavigate();
  const searchRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    navigate(`/products?q=${searchRef.current.value}`);
  }

  const handleClear = () => {
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div ref={ref} className="bg-purple-700 bg-opacity-10 h-50 w-[90%] md:w-[60%] lg:w-[40%] rounded-lg mb-[20rem] md:mb-[12rem] shadow-lg p-4">
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="relative w-full">
            <span className="bi bi-search absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"></span>
            <input
              ref={searchRef}
              name="search"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search for your gaming product here..."
              autoComplete="off"
              required
            />
            {searchTerm && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700"
              >
                <img className="w-4 h-4" src={close_cross} alt="Clear Input" />
              </button>
            )}
          </div>

          <button type="submit" className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300"></button>

        </form>
      </div>
    </div>
  );
};
