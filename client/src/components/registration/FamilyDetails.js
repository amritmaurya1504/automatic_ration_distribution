import React, { useState } from "react";
import FamilyDetailsForm from "./FamilyDetailsForm";

const FamilyDetails = () => {
  return (
    <>
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
            <FamilyDetailsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyDetails;
