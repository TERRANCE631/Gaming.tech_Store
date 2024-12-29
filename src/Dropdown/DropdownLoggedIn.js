import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const DropdownLoggedIn = ({ setDropDown }) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState({});

    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    useEffect(() => {
        async function getUser() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/600/users/${cbid}`, {
                method: "GET",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
            })
            const data = await response.json();
            setUsers(data);
        }

        getUser();
    }, [token, cbid]);

    function handleLogout() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("cbid");
        navigate("/");
        setDropDown(false);
    }

    return (
        <div id="dropdownAvatar" className="select-none	absolute top-16 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <div className="py-3 px-4 text-sm text-gray-800 ">
                <div className="font-medium truncate text-purple-600"><span className="text-gray-600">User Name: </span> {users.name}</div>
            </div>
            <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link onClick={() => setDropDown(false)} to="/products" className="block py-2 px-4 rounded bg-purple-600 border-b text-white hover:bg-gray-500">All Items</Link>
                </li>
                <li>
                    <Link onClick={() => setDropDown(false)} to="/DashboardPage" className="block py-2 px-4 rounded bg-purple-600 border-b text-white hover:bg-gray-500">Your Orders</Link>
                </li>
            </ul>
            <Link to="/">
                <div className="py-1">
                    <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Log out</span>
                </div>
            </Link>
        </div>
    )
}
