import React from "react";
import { Link } from "react-router-dom";

const PersonalDetails = () => {
  return (
    <div class="mx-24 mt-8 p-8 border rounded-md">
      <div class="grid gap-2 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div class="text-gray-600">
          <h1 className="text-[24px] font-bold mb-3">Step-1</h1>
          <p class="font-medium text-xl">Personal Details</p>
          <p className="">
            Please fill out all the fields carefully for the primary <br />{" "}
            member of the family.
          </p>
        </div>

        <div class="lg:col-span-2">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div class="md:col-span-5">
              <label for="full_name">Full Name</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
              />
            </div>

            <div class="md:col-span-5">
              <label for="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
                placeholder="email@domain.com"
              />
            </div>
            <div class="md:col-span-5">
              <label for="phone">Phone Number</label>
              <input
                type="number"
                name="phone"
                id="phone"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="91XXXXXXXX"
              />
            </div>
            <div class="md:col-span-2">
              <label for="dob">Date of Birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
                placeholder=""
              />
            </div>
            <div class="md:col-span-3">
              <label for="countries" className="block  text-sm  ">
                Gender
              </label>
              <select
                id="countries"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              >
                <option selected>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="na">Prefer not to say</option>
              </select>
            </div>

            <div class="md:col-span-3">
              <label for="address">Address / Street</label>
              <input
                type="text"
                name="address"
                id="address"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
                placeholder=""
              />
            </div>

            <div class="md:col-span-2">
              <label for="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
                placeholder=""
              />
            </div>

            <div class="md:col-span-2">
              <label for="country">Country / region</label>
              <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <input
                  name="country"
                  id="country"
                  placeholder="Country"
                  class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                  value=""
                />
                <button
                  tabindex="-1"
                  class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                >
                  <svg
                    class="w-4 h-4 mx-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <button
                  tabindex="-1"
                  for="show_more"
                  class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                >
                  <svg
                    class="w-4 h-4 mx-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div class="md:col-span-2">
              <label for="state">State / province</label>
              <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <input
                  name="state"
                  id="state"
                  placeholder="State"
                  class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                  value=""
                />
                <button
                  tabindex="-1"
                  class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                >
                  <svg
                    class="w-4 h-4 mx-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <button
                  tabindex="-1"
                  for="show_more"
                  class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                >
                  <svg
                    class="w-4 h-4 mx-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div class="md:col-span-1">
              <label for="zipcode">Pincode</label>
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder=""
                value=""
              />
            </div>

            <div class="md:col-span-5">
              <label for="full_name">Adhar Card</label>
              <input
                type="text"
                name="adhar"
                id="adhar"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder="Enter your 12 digit Adhar Number"
              />
            </div>

            <div class="md:col-span-2"></div>

            <div class="md:col-span-5 text-right">
              <div class="inline-flex items-end">
                <Link to="/register/family-details">
                  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
