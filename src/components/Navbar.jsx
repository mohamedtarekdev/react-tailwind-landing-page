import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0">
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          <ul className="hidden md:flex lg:space-x-12 md:space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex justify-center md:space-x-6 items-center">
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
          <div className="md:hidden sm:flex flex-col justify-end">
            <button onClick={toggleMobileDrawer}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-16.5 md:hidden z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center lg:hidden">
            <ul className="flex flex-col space-y-8 md:hidden">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex md:hidden space-x-8 mt-8">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
