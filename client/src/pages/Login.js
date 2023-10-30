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

          <UserAuth />
        );
      case 1:
        return (
          // Step 2: Social Profiles
          // Input fields for Step 2
          <RfidAuth />
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="w-2/4 mx-auto mt-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
                      ? "border-indigo-500"
                      : "border-gray-300"
                  }`}
                >
                  {step}
                </span>
                <div
                  className={`absolute top-[173px] w-6 h-6 rounded-full ${
                    currentStep === index ? "bg-indigo-500" : "bg-gray-300"
                  } `}
                ></div>

                {index === steps.length - 1 && (
                  <div
                    className={`absolute top-[173px] right-[415px] w-6 h-6 rounded-full bg-gray-300`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {renderStep()}

          <div className="flex mt-8">
            <button
              type="button"
              onClick={next}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-8 rounded"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
