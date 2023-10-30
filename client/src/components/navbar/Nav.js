import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://res.cloudinary.com/dewu8pifs/image/upload/v1698594119/logo_wdai8e.png"
            alt="logo"
            className="h-12 w-12"
          />
          <span class="ml-3 text-xl cursor-pointer">
            Automated Ration Distribution System
          </span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900 cursor-pointer" to="/">
            Home
          </Link>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">About Us</a>
        </nav>
        <Link to="/login">
          <button class="inline-flex items-center bg-green-100 text-[#5b955d] font-semibold border-0 py-2 px-5 focus:outline-none rounded-md text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
