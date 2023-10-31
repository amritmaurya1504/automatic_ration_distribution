import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="hidden md:flex md:w-64 md:flex-col">
      <div class="flex flex-col flex-grow pt-5 overflow-y-auto bg-white justify-between  h-screen">
        <div>
          <div class="flex items-center gap-2 flex-shrink-0 px-4">
            <img
              src="https://res.cloudinary.com/dewu8pifs/image/upload/v1698594119/logo_wdai8e.png"
              alt="logo"
              className="h-12 w-12"
            />
            <p className=" text-lg text-gray-600">
              Automated Ration <br /> Distribution System
            </p>
          </div>

          <div class="px-4 mt-6">
            <hr class="border-gray-200" />
          </div>

          <div class="flex flex-col flex-1 px-3 mt-6">
            <div class="space-y-4">
              <nav>
                <a
                  href="#"
                  class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-white rounded-lg bg-green-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="flex-shrink-0 w-5 h-5 mr-4 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  Information
                </a>

                <a
                  href="#"
                  class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-gray-900 rounded-lg hover:bg-green-50 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Personal Details
                </a>

                <a
                  href="#"
                  class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-gray-900 rounded-lg hover:bg-green-50 group"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Family Details
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div class="pb-4 mt-20">
          <Link
            to="/"
            class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-gray-900 rounded-lg hover:bg-green-50 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="flex-shrink-0 w-5 h-5 mr-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Signout
          </Link>
          <button
            type="button"
            class="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-green-50"
          >
            <img
              class="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
              alt=""
            />
            Jacob Jones
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
