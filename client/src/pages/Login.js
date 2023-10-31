import React, { useState } from "react";
import Nav from "../components/navbar/Nav";
import UserAuth from "../components/auth/UserAuth";
import RfidAuth from "../components/auth/RfidAuth";

const Login = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [signinSuccess, setSigninSuccess] = useState(false);
  const [scanRfid, setScanRfid] = useState(false);

  const steps = ["User Authentication", "RFID Authentication"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here, you can handle form submission, such as sending data to a server or displaying in an alert.
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          // Step 1: Account Setup
          // You can create a separate component for each step or keep the input fields directly here.
          // For simplicity, I'm keeping them directly in this function.

          <UserAuth next={next} setSigninSuccess={setSigninSuccess} />
        );
      case 1:
        return (
          // Step 2: Social Profiles
          // Input fields for Step 2
          <RfidAuth
            setScanRfid={setScanRfid}
            setSigninSuccess={setSigninSuccess}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="w-full p-4 flex flex-col items-center">
        <h2 class="text-gray-900 text-xl  mb-1 font-medium title-font">
          Welcome!
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Login with your credentials and scan your RFID.
        </p>
      </div>

      <div className="w-1/2 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 flex">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex-1 pb-4 ${index < steps.length - 1}`}
              >
                <span
                  className={`text-center block border-b-4 pb-4 ${
                    currentStep === index
                      ? "border-green-700"
                      : signinSuccess
                      ? "border-green-500"
                      : scanRfid
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                >
                  {step}
                </span>
                <div
                  className={`absolute top-[253px] w-6 h-6 rounded-full ${
                    currentStep === index
                      ? "bg-green-700"
                      : signinSuccess
                      ? "bg-green-500"
                      : scanRfid
                      ? "bg-green-500"
                      : "bg-gray-300"
                  } `}
                ></div>

                {index === steps.length - 1 && (
                  <div
                    className={`absolute top-[253px] right-[400px] w-6 h-6 rounded-full ${
                      scanRfid ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {renderStep()}
        </form>
      </div>
    </div>
  );
};

export default Login;
