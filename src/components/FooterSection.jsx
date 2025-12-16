import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <div className="h-80 flex md:flex-row flex-col-reverse md:justify-between md:items-center md:space-x-20 lg:space-x-30 justify-center">
      <div className="flex md:flex-1 justify-between mt-12 md:mt-0">
        <div className="">
          <img src={logo} alt="logo" className="sm:w-20 w-15" />
        </div>
        <div className="flex flex-col space-y-3 sm:text-base text-sm">
          <span>VirtualR</span>
          <ul className="flex flex-col space-y-3">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-3 sm:text-base text-sm">
          <span>Contact</span>
          <span>mail@virtualr.com</span>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-5">
          <a
            href="#"
            className="flex justify-center items-center border border-white p-3.5 rounded-full"
          >
            <Facebook />
          </a>
          <a
            href="#"
            className="flex justify-center items-center border border-white p-3.5 rounded-full"
          >
            <Youtube />
          </a>
        </div>
        <div className="flex space-x-6 items-center w-full">
          <a href="#" className="py-2 px-3 border rounded-md">
            Sign In
          </a>
          <a
            href="#"
            className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
