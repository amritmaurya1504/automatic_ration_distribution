import React from 'react'
import BeatLoader from "react-spinners/BeatLoader"


const CredentailsFormDetails = ({ accountCredentials, setAccountCredentials, handleSubmit, loader }) => {

  const getRFID = () => {

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountCredentials(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div>
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        <div class="md:col-span-5">
          <label for="full_name">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={accountCredentials.username}
            onChange={handleChange}
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"

          />
        </div>
        <div class="md:col-span-5">
          <label for="email">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={accountCredentials.password}
            onChange={handleChange}
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="***********"
          />
        </div>
        <div class="md:col-span-5">
          <label for="email">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={accountCredentials.confirmPassword}
            onChange={handleChange}
            placeholder="***********"
          />
        </div>
        <div class="md:col-span-5">
          <label for="dob">RFID</label>
          <input
            type="text"
            name="RFID"
            id="RFID"
            value={accountCredentials.RFID}
            onChange={handleChange}
            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="Click below to get your RFID."
          />
        </div>
        <div class="">
          <button class="bg-gray-200 text-gray-500 font-normal py-2 px-4 rounded" onClick={getRFID} >
            Get Your RFID
          </button>
        </div>
      </div>

      <div class="md:col-span-5 text-right" onClick={handleSubmit}>
        <div class="inline-flex items-end">
          <a>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              {loader ? (<BeatLoader color="#ffff"
                size={10} />) : "Submit"}
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CredentailsFormDetails
