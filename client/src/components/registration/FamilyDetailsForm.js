import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RationContext } from "../../context/RationContext"


const MemberForm = ({ memberData, setMemberData, index }) => {
  // Update memberData when input changes
  const handleChange = (e) => {
    const updatedData = [...memberData];
    updatedData[index][e.target.name] = e.target.value;
    setMemberData(updatedData);
  };

  return (
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
      <div class="md:col-span-5">
        <label for="full_name">Full Name</label>
        <input
          type="text"
          name="full_name"
          id="full_name"
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          value={memberData[index].full_name}
          onChange={handleChange}
        />
      </div>
      <div class="md:col-span-5">
        <label for="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          value={memberData[index].email}
          onChange={handleChange}
          placeholder="email@domain.com"
        />
      </div>
      <div class="md:col-span-5">
        <label for="phone">Phone Number</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={memberData[index].phone}
          onChange={handleChange}
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
          value={memberData[index].dob}
          onChange={handleChange}
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          placeholder=""
        />
      </div>
      <div class="md:col-span-3">
        <label for="gender" className="block  text-sm  ">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          value={memberData[index].gender}
          onChange={handleChange}
        >
          <option selected>Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="na">Prefer not to say</option>
        </select>
      </div>

      <div class="md:col-span-3">
        <label for="full_name">Aadhaar ID</label>
        <input
          type="text"
          name="aadhaar"
          id="aadhaar"
          value={memberData[index].aadhaar}
          onChange={handleChange}
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          placeholder="Enter 12 digit Adhar Number"
        />
      </div>
      <div class="md:col-span-2">
        <label for="full_name">Relation</label>
        <input
          type="text"
          name="relation"
          id="relation"
          value={memberData[index].relation}
          onChange={handleChange}
          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          placeholder="Enter relation with primary member"
        />
      </div>
    </div>
  );
};

const FamilyDetailsForm = () => {

  const { setFamilyMembersDetails } = useContext(RationContext)

  const [memberData, setMemberData] = useState([
    {
      full_name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      aadhaar: "",
      relation: "",
    },
  ]);

  const addMoreMembers = () => {
    setMemberData([...memberData, {
      full_name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      aadhaar: "",
      relation: "",
    }]);
  };
  const navigate = useNavigate();
  const handleNext = () => {
    setFamilyMembersDetails(memberData);
    navigate("/register/create-credentials");
  }

  return (
    <>
      {memberData.map((member, index) => (
        <div key={index}>
          {index !== 0 && (
            <>
              <div className="md:col-span-5 my-4">
                <div className="bg-green-500 h-0.5 mx-2"></div>
                <p className="text-center text-gray-600 font-bold mt-2">New Member</p>
              </div>

            </>
          )} {/* Divider for subsequent forms */}
          <MemberForm
            memberData={memberData}
            setMemberData={setMemberData}
            index={index}
          />
        </div>
      ))}

      <div className="md:col-span-5 text-left mt-4" onClick={addMoreMembers} >
        <div class="inline-flex items-end">
          <Link to="/register/family-details">
            <button class="bg-green-200 hover:bg-green-700 hover:text-white flex gap-2 text-green-700 font-bold py-1.5 px-4 rounded">
              <span>Add More Members</span>
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
          </Link>
        </div>
      </div>
      <div class="md:col-span-5 text-right" onClick={handleNext}>
        <div class="inline-flex items-end">
          <Link>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
          </Link>
        </div>
      </div>

    </>
  );
};

export default FamilyDetailsForm;
