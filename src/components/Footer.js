import { Link } from "react-router-dom";

import Logo from "../Assets/Logo.png";
import Card from "../Assets/Icons/card.png";
import Paypal from "../Assets/Icons/paypal.png";
import Visa from "../Assets/Icons/visa.png";

import YouTube from "../Assets/Icons/youtube icon.png";
import FaceBook from "../Assets/Icons/facebook icon.png";
import Paintrest from "../Assets/Icons/pinterest icon.png";
import WhatsApp from "../Assets/Icons/whatsapp icon.png";

export function Footer() {
  return (
    <footer className="border-t-2 mt-20 py-4 bg-gradient-to-t from-slate-200 to-white">
      <div className="flex justify-evenly items-center" to="/">

        <div className="hidden md:flex flex-wrap items-center flex-shrink-0">
          <img className="h-[4rem] w-[4rem] rounded-full" src={Logo} alt="Logo" />
          <span className="md:text-3xl text-3xl font_style">Gaming.<span className="text-purple-900 font-bold">Tech</span></span>
        </div>

        <div className="">
          <p className="px-10 font-bold">Follow Us</p>
          <div className="flex -mb-2 py-2 gap-2">
            <img className="w-[2rem] h-[2rem]" src={YouTube} alt="" />
            <img className="w-[2rem] h-[2rem]" src={FaceBook} alt="" />
            <img className="w-[2rem] h-[2rem]" src={WhatsApp} alt="" />
            <img className="w-[2rem] h-[2rem]" src={Paintrest} alt="" />
          </div>
        </div>

        <div className="">
          <div className="text-center">
            <p className="font-bold py-2 -mb-2">Payment Methods</p>
            <span className="flex justify-center gap-3">
              <img className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem]" src={Card} alt="" />
              <img className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem]" src={Visa} alt="" />
              <img className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem]" src={Paypal} alt="" />
            </span>
          </div>
        </div>

      </div>

      <div className="flex justify-center py-4">
        <span className="text-sm p-4 text-center text-gray-500">© 2024 <Link to="" className="hover:underline hover:text-purple-500">Gaming.Tech™</Link>. All Rights Reserved. <spam className="text-purple-500"> | Tel: 07* 8** 5***</spam></span>
      </div>
      
    </footer>
  )
}
