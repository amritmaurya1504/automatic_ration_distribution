import React, { useState } from "react";
import FamilyDetailsForm from "./FamilyDetailsForm";

const FamilyDetails = () => {
  const [show, setShow] = useState(false);
  return (
    <div class="mx-24 mt-8 p-8 border rounded-md">
      <div class="grid gap-2 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div class="text-gray-600">
          <h1 className="text-[24px] font-bold mb-3">Step-2</h1>
          <p class="font-medium text-xl">Family Details</p>
          <p className="">
            Please fill out all the fields carefully for the family <br />{" "}
            member of the family.
          </p>
        </div>

        <div class="lg:col-span-2">
          {show ? (
            <FamilyDetailsForm />
          ) : (
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded flex items-center gap-2"
              onClick={() => setShow(true)}
            >
              Add
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;
