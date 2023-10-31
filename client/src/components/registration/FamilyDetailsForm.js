import React from "react";
import { Link } from "react-router-dom";

const FamilyDetailsForm = () => {
  return (
    <>
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
    </>
  );
};

export default FamilyDetailsForm;
