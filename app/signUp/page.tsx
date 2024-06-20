"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import LoginPage from "../login/page";
const SignUpPage: React.FC = () => {
  const [modal, setModal] = React.useState(false);
  const onModalOpen = () => {
    setModal(true);
  };
  const onModalClose = () => {
    setModal(false);
  };

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
      //  if the password,email and username doesnot matches
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="py-6 mb-10 text-5xl">
        {loading ? "Processing..." : "Free Sign Up"}
      </h1>

      <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />

      <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Your Email/Phone Number"
      />

      <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <input
        className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Confirm Password"
      />

      <button className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase px-40 py-3 mt-5 font-bold">
        {buttonDisabled ? "Sign Up" : "Register My Account Now"}
      </button>

      <p onClick={onModalOpen} className="mt-5">
        Do you have a free account already?{" "}
        <span className="font-bold text-green-600 ml-2 cursor-pointer underline">
          <Link href="/login">
            <p>Login</p>
          </Link>
        </span>
      </p>

      <Link href="/">
        <h3 className="mt-8 opacity-50">
          <p className="inline mr-1"> Back to the Homepage</p>
        </h3>
      </Link>
    </div>
  );
};
export default SignUpPage;
