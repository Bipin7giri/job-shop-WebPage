"use Client";
import Link from "next/link";
import React, { useEffect } from "react";
const JobSeekerSignUpPage: React.FC = () => {
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
    <div className="flex flex-col items-center  min-h-screen py-2">
      <h1 className=" mb-5 text-5xl "> LOGO</h1>
      <div className="flex flex-col justify-start">
        <h1 className=" my-3 text-2xl font-bold ">Register to Find Job</h1>
        <h1 className=" font-extralight    mb-3">
          Signup to continue using this website
        </h1>
        <label>Full Name</label>
        <input
          className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
        <label>Email</label>
        <input
          className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Your Email/Phone Number"
        />
        <label>Password</label>
        <input
          className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        <label>Confirm Password</label>
        <input
          className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg my-2 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Confirm Password"
        />

        <button className="p-2 border  border-black rounded-lg focus:outline-none focus:border-gray-600 bg-black text-white uppercase px-40 py-3 mt-5 font-bold w-[350px]">
          {buttonDisabled ? "Sign Up" : "Register My Account Now"}
        </button>
      </div>
      <div onClick={onModalOpen} className="mt-5">
        Already Have an Account?{" "}
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
export default JobSeekerSignUpPage;
