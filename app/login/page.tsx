"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
interface propsLogin {
  showModal: boolean;
  closeModal: () => void;
}
const LoginPage: React.FC<propsLogin> = ({ showModal, closeModal }) => {
  const [user, setUser] = React.useState({ email: "", password: "" });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const onLoading = () => {
    if (user.email.length > 0 && user.password.length > 0) {
      //  setButtonDisabled(true);
      setLoading(true);
      setButtonDisabled(false);
    } else {
      setLoading(false);
      setButtonDisabled(true);
    }
  };
  return (
    <>
      {showModal && (
        <div
          className={`"
         justify-center 
         items-center 
         flex 
         fixed 
         inset-0 
         z-50 
         outline-none 
         focus:outline-none
         bg-neutral-800/70 
       
          
       "`}
        >
          <div
            className={`" relative   w-full  md:w-4/6  lg:w-3/6  xl:w-2/5  my-6  mx-auto h-full
            xl:h-[90%] 
               lg:h-[90%]  md:h-[90%] 
              ${showModal ? "overflow-x-hidden " : ""} "
         
        `}
          >
            {/*content*/}
            <div
              className={`
           
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100 " : "opacity-0"}
          `}
            >
              <div className="    lg:h-auto md:h-auto border-0  rounded-lg  shadow-lg  relative   flex  flex-col   w-full  bg-white outline-none  focus:outline-none">
                <div className=" flex   items-center  p-6 mb-6   bg-blue-200  rounded-t  justify-center  relative border-b-[1px]">
                  <button
                    className=" p-1 border-0 hover:opacity-70 transition absolute left-5"
                    title="Close"
                    onClick={closeModal}
                  >
                    <IoClose size={25} />
                  </button>
                  <div className="text-lg font-semibold ">
                    {" "}
                    <h1>Login</h1>
                  </div>
                </div>
                {/* content */}
                <div className="flex flex-col items-center justify-center ">
                  {/* email */}
                  <input
                    className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    placeholder="Your Email..."
                  />
                  {/* password */}
                  <input
                    className="w-[350px] text-slate-800 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    placeholder="Your Password..."
                  />

                  <button
                    onClick={onLoading}
                    className=" w-[350px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 uppercase  py-5 mt-5 font-bold"
                  >
                    {loading ? "Logging in....." : "log in"}
                  </button>

                  {/* <Link href="/signUp">
                    <p className="mt-10">
                      Do not have an account yet?
                      <span className="font-bold text-green-600 ml-2 cursor-pointer underline">
                        Register your free account now
                      </span>
                    </p>
                  </Link> */}

                  <Link href="/">
                    <h3 className="m-8 opacity-50">
                      <p className="inline mr-1" /> Back to the Homepage
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default LoginPage;
