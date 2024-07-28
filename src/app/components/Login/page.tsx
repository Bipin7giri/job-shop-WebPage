"use client";
import Link from "next/link";
import React from "react";
import { SegmentedControl } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { setLocalStorageItem } from "@/app/utils/localStorageUtil";
import api from "@/app/api";
import { encryptToken } from "@/app/utils/cryptoUtils";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
//import "react-toastify/dist/ReactToastify.css";
//import { toast } from "react-toastify";

type LoginFormInput = {
  Email: string;
  password: string;
};
const LoginPage: React.FC = () => {
  const [section, setSection] = React.useState<
    "Login as a Employer" | "Login as a Job Seeker"
  >("Login as a Job Seeker");
  const [modal, setModal] = React.useState(false);
  const onModalOpen = () => {
    setModal(true);
  };
  const onModalClose = () => {
    setModal(false);
  };

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  //const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      setLoading(true);
      const res = await api.post("/loggedIn", data);
      if (res && res.data && res.data.access_token) {
        setLoading(false);
        const encryptedToken = encryptToken(res.data.access_token);
        const isLoggedIn = encryptToken("true");
        setLocalStorageItem("access_token", encryptedToken);
        setLocalStorageItem("isLoggedIn", isLoggedIn);
        setLocalStorageItem("employer||jobseeker", isLoggedIn);
        // setUser(res.data.data.user);
        // setLocalStorageItem('token_type', res.data.data.token_type);
        //navigate("/");
        // toast.success("Login Successfully", {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      }
    } catch (error) {
      debugger;
      setLoading(false);

      // toast.error(`Login failed: ${error}`, {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
  };
  return (
    <div className="flex flex-col items-center  min-h-screen py-2">
      <h1 className=" mb-5 text-5xl "> LOGO</h1>
      <div className="flex flex-col justify-start">
        <SegmentedControl
          size="16 10"
          value={section}
          onChange={(value: any) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          color="black"
          data={[
            { label: "Login as a Employer", value: "Login as a Employer" },
            {
              label: "Login as a Job Seeker",
              value: "Login as a Job Seeker",
            },
          ]}
        />
        <h1 className=" my-3 text-2xl font-bold "> Welcome Back!</h1>
        <h1 className=" font-extralight    mb-3">
          Login to continue using this website
        </h1>
        {/* <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        
        placeholder="Username"
      /> */}
        <label>Email</label>
        <input
          {...register("Email", {
            required: "Email is required",
          })}
          className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"
          id="email"
          type="text"
          placeholder="Your Email"
        />
        {errors.Email && (
          <p className="text-meta-1 py-1">{errors.Email.message}</p>
        )}
        <label>Password</label>
        <div className="relative">
          <input
            {...register("password", { required: "Password is required" })}
            className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button
            type="button"
            className="absolute right-4 top-5"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        {/* <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Confirm Password"
      /> */}

        <button className="p-2 border  border-black rounded-lg focus:outline-none focus:border-gray-600 bg-black text-white uppercase px-40 py-3 mt-5 font-bold w-[350px]">
          {buttonDisabled ? "Sign Up" : "Register My Account Now"}
        </button>
      </div>
      <div onClick={onModalOpen} className="mt-5">
        Do you have a free account already?{" "}
        <span className="font-bold text-green-600  cursor-pointer underline">
          <Link href="/signUp">
            <p>Login</p>
          </Link>
        </span>
      </div>
      <Link href="/">
        <h3 className="mt-3  font-extralight items-center">
          <p className="inline mr-1"> Back to the Homepage</p>
        </h3>
      </Link>
    </div>
  );
};
export default LoginPage;
