import { Link, NavLink } from "react-router-dom";
import { Search } from "./Search";

import Logo from "../Assets/Logo.png";
import profile from "../Assets/Icons/profile.png";
import cart from "../Assets/Icons/shopping-cart.png";
import searchIcon from "../Assets/Icons/search.png";

import { useState } from "react";
import { useCart } from "../Pages/Products/context";
import { DropdownLoggedIn, DropdownLoggedOut } from "../Dropdown";

export function Header() {
  const [searchSection, setSearchSection] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [dropdown, setDropDown] = useState(false);

  const { cartList } = useCart();
  const token = JSON.parse(sessionStorage.getItem("token"));

  const activeClass = "text-base block text-md py-2 pr-4 pl-3 text-white bg-blue-700 md:rounded-none rounded md:bg-transparent md:text-blue-700 md:p-0";
  const inActiveClass = "text-base block text-md py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0";

  return (
    <header>
      <nav className="py-2 px-2 flex justify-between mb-5 bg-gradient-to-b from-slate-200 to-white">
        
        <Link to="/">
          <div className="flex flex-wrap items-center flex-shrink-0">
            <img className="md:h-[3rem] md:w-[3rem] h-[2rem] w-[2rem] rounded-full" src={Logo} alt="Logo" />
            <span className="md:text-2xl text-xl font_style">Gaming.<span className="text-purple-900 font-bold">Tech</span></span>
          </div>
        </Link>

        <div className="hidden md:flex justify-center">
          <ul className="flex p-4 mt-4 rounded-lg md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/TopRated" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="/NewRelease" className={({ isActive }) => isActive ? activeClass : inActiveClass}>New Release</NavLink>
            </li>
          </ul>
        </div>

        {searchSection && <Search setSearchSection={setSearchSection} />}

        <div className="flex gap-4 items-center md:pr-5 pr-5">

          <span className="block" onClick={() => setSearchSection(!searchSection)} >
            <img className="w-[1.8rem] cursor-pointer" src={searchIcon} alt="" />
          </span>

          <Link to="/CartPage">
            <span>
              <img className="w-[1.8rem]" src={cart} alt="" />
              <span className="text-white text-sm absolute top-2 md:top-4 md:right-[4.2rem] right-[6rem] bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
            </span>
          </Link>

          <Link>
            <span>
              <img onClick={() => setDropDown(!dropdown)} className="w-[1.8rem]" src={profile} alt="" />
              {dropdown && (token ? < DropdownLoggedIn setDropDown={setDropDown} /> : < DropdownLoggedOut setDropDown={setDropDown} />)}
            </span>
          </Link>

          <div className="flex md:hidden">
            <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center -mr-5 bg-purple-100 p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
              <svg className="w-6 h6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Open menu</span>
            </button>
          </div>

        </div>
      </nav>

      <div onClick={() => setHidden(true)} className={`${hidden ? "hidden" : ""} md:hidden w-full -mt-2 bg-white absolute`} id="navbar-search">
        <ul className="flex flex-col p-4 rounded-lg">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="TopRated" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Top Rated</NavLink>
          </li>
          <li>
            <NavLink to="NewRelease" className={({ isActive }) => isActive ? activeClass : inActiveClass}>New Release</NavLink>
          </li>
        </ul>
      </div>
      
    </header>
  )
}
