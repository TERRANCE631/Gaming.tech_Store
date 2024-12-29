import { Link } from "react-router-dom"

export const DropdownLoggedOut = ({setDropDown}) => {
  return (
    <div id="dropdownAvatar" className="select-none	absolute top-16 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={() => setDropDown(false)} to="/products" className="block py-2 px-4 rounded bg-purple-600 border-b text-white hover:bg-gray-500">All Items</Link>
            </li>
            <li>
                <Link onClick={() => setDropDown(false)} to="/Login" className="block py-2 px-4 rounded bg-purple-600 border-b text-white hover:bg-gray-500">Login</Link>
            </li>
            <li>
                <Link onClick={() => setDropDown(false)} to="/Register" className="block py-2 px-4 rounded bg-purple-600 text-white hover:bg-gray-500">Register</Link>
            </li>
        </ul>
    </div>
  )
}
