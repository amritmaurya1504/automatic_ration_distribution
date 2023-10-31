import React from "react";

const RfidAuth = ({ setScanRfid, setSigninSuccess }) => {
  const handleRfid = () => {
    setSigninSuccess(false);
    setScanRfid(true);
  };
  return (
    <div className="flex items-center justify-center w-full">
      <button
        type="button"
        class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex  mr-2 mb-2 items-center gap-6 "
        onClick={handleRfid}
      >
        <img
          src="https://res.cloudinary.com/dewu8pifs/image/upload/v1698592762/rfid_mr1j9x.png"
          className="h-16 w-16"
        />
        Scan Your RFID card
      </button>
    </div>
  );
};

export default RfidAuth;
