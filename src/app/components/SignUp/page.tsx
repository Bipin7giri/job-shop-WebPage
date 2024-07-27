"use client";
import React, { useState } from "react";
import EmployerSignUpPage from "./EmployerSignUp";

const Signup: React.FC = () => {
  return (
    <div className="flex flex-col align-middle justify-center">
      <h1>Join as a Client or Jobseeker</h1>
      {/* {showEmployerSignUp ? (
        <EmployerSignUpPage />
      ) : (
        <>
          <div onClick={handleClientClick}>
            Image/ I am a client, hiring for a project
          </div>
          <div>Image/ I am a client, looking for a job</div>
          <p>Already Have an Account? Login</p>
        </>
      )} */}
    </div>
  );
};

export default Signup;
