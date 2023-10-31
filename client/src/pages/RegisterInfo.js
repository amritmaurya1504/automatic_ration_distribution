import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import RegistrationInfo from "../components/registration/RegistrationInfo";
import Footer from "../components/Footer"

const RegisterInfo = () => {
  return (
    <div>
      <Nav />
      <RegistrationInfo />
    </div>
  );
};

export default RegisterInfo;
