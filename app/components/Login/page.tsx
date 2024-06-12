import React from "react";
import { useState } from "react";
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";
import { Button } from "../Button/page";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
interface DropdownState {
  showModal: boolean;

  closeModal: () => void;
}
export const Login: React.FC<DropdownState> = ({ showModal, closeModal }) => {
  const [phone, setPhone] = useState("+351");

  return (
    <>
      {/* background */}
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
          {/* modal container */}

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
                {/*header*/}
                <div className=" flex   items-center  p-6    rounded-t  justify-center  relative border-b-[1px]">
                  <button
                    className=" p-1 border-0 hover:opacity-70 transition absolute left-5"
                    title="Close"
                    onClick={closeModal}
                  >
                    <IoClose size={25} />
                  </button>
                  <div className="text-lg font-semibold">Log in or Sign Up</div>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto w-full">
                  <h1 className=" font-bold text-2xl pb-3">
                    Welcome to JobShop
                  </h1>
                  <div>
                    {/* <PhoneInput
                      hideDropdown={false}
                      inputClassName="outline-none w-full "
                      defaultCountry="portugal"
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      className="my-2"
                    /> */}
                  </div>

                  <input
                    type="number"
                    placeholder="Phone number"
                    className=" my-2  border-0 p-4 w-full outline-none  bg-neutral-100  rounded-md  focus:ring-2 focus:ring-red-500  focus:ring-opacity-50  transition duration-300 ease-in-out  hover:bg-neutral-200  hover:bg-opacity-50  focus:bg-neutral-200  focus:bg-opacity-50"
                  />

                  <p className=" text-xs opacity-60">
                    We’ll call or text you to confirm your number. Standard
                    message and data rates apply. <span>Privacy Policy</span>{" "}
                  </p>
                </div>

                {/*footer*/}
                <div className=" flex  flex-col items-center  p-4  gap-4 ">
                  <div
                    className="items-center w-full border text-lg font-semibold text-white bg-gradient-to-r from-red-600 via-pink-600 to-red-400 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full h-14>
"
                  >
                    <Button>Continue</Button>
                  </div>

                  <p className="">____________ or ____________</p>
                  <div className="flex flex-row items-center w-full border hover:bg-slate-300 hover:bg-opacity-20">
                    <IoLogoFacebook size={30} />
                    <Button>Continue with Facebook</Button>{" "}
                  </div>
                  <div className="flex flex-row items-center w-full border hover:bg-slate-300 hover:bg-opacity-20">
                    <FaApple size={30} />
                    <Button> Continue with Apple</Button>
                  </div>
                  <div className="flex flex-row items-center w-full border hover:bg-slate-300 hover:bg-opacity-20">
                    <FcGoogle size={30} />
                    <Button> Continue with Google</Button>
                  </div>
                  <div className="flex flex-row items-center w-full border hover:bg-slate-300 hover:bg-opacity-20">
                    <MdOutlineMail size={30} />
                    <Button> Continue with Email</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
