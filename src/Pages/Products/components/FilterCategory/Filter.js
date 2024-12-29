import { NavLink } from "react-router-dom";

export function Filter() {
    const activeClass = "text-base block text-md py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0";
    const inActiveClass = "text-base block text-md py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0";

    return (
        <div>
            <div className="flex justify-center items-center mb-10">
                <ul className="flex md:gap-8 mt-4 rounded-lg md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                    <li>
                        <NavLink to="/Games" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Games</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Monitors" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Monitors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Keyboards" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Keyboards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Mice" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Mice</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
