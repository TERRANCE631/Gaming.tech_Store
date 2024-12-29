import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Ad_image_1 from "../../Assets/Ads/Ads.jpg";
import ad_1 from '../../Assets/Ads/Xbox_Vouchers.jpg';
import ad_2 from '../../Assets/Ads/Playstation_Vouchers.jpg';
import ad_3 from '../../Assets/Ads/Steam_Vouchers.jpg';

export function Home() {
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

  return (
    <div>
      <p className="">{token ?
        <span className="md:text-2xl font_style text-green-800">Welcome to Gaming.Tech,
          <span className="text-purple-700 font_style"> {users.name}</span></span>
        :
        <span className="md:text-2xl font_style text-green-800">Hey there, <Link to="/Register">
          <span className="text-purple-700 font_style underline md:text-2xl">Sign in</span></Link> and get your Gaming.Techs </span>}</p>

      <div className="">
        <img className="w-full md:h-[35rem] h-[20rem]" src={Ad_image_1} alt="Ads" />
      </div>

      <div className="mt-6">
        <Link
          to="/products"
          className="absolute md:-mt-[20rem] font_style md:ml-[4.8rem] lg:ml-[9.5rem] -mt-[12rem] ml-[1rem] shadow-md md:px-6 md:py-3 px-2 py-1 text-base text-white bg-gradient-to-r from-green-900 to-green-500 rounded-md transition sm:px-8 sm:py-4 sm:text-lg lg:text-xl">
          Start Now
        </Link>
      </div>

      <div className="grid grid-cols-3">
        <img className="w-[rem] h-[rem]" src={ad_1} alt="" />
        <img className="w-[rem] h-[rem]" src={ad_2} alt="" />
        <img className="w-[rem] h-[rem]" src={ad_3} alt="" />
      </div>
    </div>
  )
}
