import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Logo from "../Assets/Logo.png";
import googleIcon from "../Assets/Icons/google.png";
import facebookIcon from "../Assets/Icons/facebook icon.png";
import greentick from "../Assets/Icons/circle_tick.png";

export function Register() {
    const activeClass = "bg-purple-700 md:px-[4.2rem] md:py-[1rem] px-[3.2rem] py-[17px] text-sm text-white rounded-l-lg";
    const inActiveClass = "bg-gray-300 md:px-[4.5rem] md:py-[1rem] px-[4rem] py-[17px] text-sm rounded-r-lg";

    const navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault();

        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();
        const password = event.target.password.value.trim();
        const token = localStorage.getItem("authToken") || "";

        if (!name || !email || !password) {
            toast.error("All fields are required!");
            return;
        }

        const authDetail = { name, email, password, token };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/Register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(authDetail),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Registration failed.");
            }

            const data = await response.json();
            console.log(authDetail);

            if (data.accessToken) {
                sessionStorage.setItem("token", JSON.stringify(data.accessToken));
                sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
            }

            if (data.accessToken) {
                localStorage.setItem("authToken", data.accessToken);
                toast.success("Registration successful!");

                event.target.reset();
                setTimeout(() => navigate("/login"), 2000);

            } else {
                toast.warn("Registration successful, but no token received.");
            }
        } catch (error) {
            toast.error(error.message || "An error occurred during registration.");
        }
    };

    return (
        <section className="grid md:grid-cols-2 grid-cols-1 my-20">
            <div>

                <ul className="flex items-center justify-center">
                    <li>
                        <NavLink to="/Register" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Sign up</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Login</NavLink>
                    </li>
                </ul>

                <div className="my-20 mx-10">
                    <div className="grid grid-cols-1">

                        <form onSubmit={handleRegister}>
                            <div className="mb-10">
                                <input id="name" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your name here *" />
                            </div>
                            <div className="mb-10">
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="E-mail address here *" />
                            </div>
                            <div className="">
                                <input id="password" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password here *" />
                            </div>
                            <div className="flex gap-4 items-center mt-5 mb-2 justify-center">
                                <img className="w-6" src={googleIcon} alt="SignIn with Google" />
                                <img className="w-6" src={facebookIcon} alt="SignIn with Facebook" />
                                <h1 className="text-gray-500 text-sm">Login with social accounts</h1>
                            </div>
                            <div className="mb-10">
                                <button type="submit" className="bg-purple-800 text-white py-3 rounded-lg w-full">submit</button>
                            </div>
                            <p className="-mt-8 text-sm text-gray-500">You already have an account? <Link to="/Login" className="text-bold underline text-blue-700">Login</Link>.</p>
                        </form>

                    </div>
                </div>
            </div>

            <div className="my-20">
                <div className="-mt-9">
                    <div className="flex justify-center items-center">
                        <img className="h-[8rem] w-[8rem] rounded-full" src={Logo} alt="Logo" />
                        <div className="">
                            <span className="md:text-6xl text-2xl font_style">Gaming.<span className="text-purple-900 font-bold">Tech</span></span>
                        </div>
                    </div>

                    <div className="my-10">
                        <p className="flex items-center gap-2">
                            <img className="w-4 h-4" src={greentick} alt="" />Delivering in 5+ Cities
                        </p>
                        <p className="flex items-center gap-2">
                            <img className="w-4 h-4" src={greentick} alt="" />Presence in 2 Continents
                        </p>
                        <p className="flex items-center gap-2">
                            <img className="w-4 h-4" src={greentick} alt="" />16 Products
                        </p>
                        <p className="flex items-center gap-2">
                            <img className="w-4 h-4" src={greentick} alt="" />10 Million Happy Customers & Counting
                        </p>
                        <p className="flex items-center gap-2">
                            <img className="w-4 h-4" src={greentick} alt="" />Gaming.Tech Won Best Cross Border Brand Award in 2024
                        </p>
                    </div>

                </div>
            </div>

            <ToastContainer />
        </section>
    )
}
