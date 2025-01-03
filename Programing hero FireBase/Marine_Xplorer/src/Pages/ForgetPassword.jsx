import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen object-right">
        <div className="w-full max-w-md  p-8 space-y-6 rounded-lg bg-[#b0dfc8cb] shadow-xl">
          {/* Title */}
          <h2 className="text-2xl mb-10 mt-1 font-bold text-center">
            Recover your account
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-2">
            {/* Email Field */}

            <h2 className="text-left font-semibold">Email Address:</h2>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full pl-4 p-2.5 text-gray-900  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            <button className="w-full py-2 btn text-white mt-6 bg-[#d28eaef5] rounded-md hover:bg-[#e17979d7] focus:outline-none">
              Sent Code
            </button>
          </form>

          <div className="flex justify-center gap-2 font-semibold items-center">
            <Link className="text-red-500 hover:underline">Register</Link>
            <Link className="text-blue-500 hover:underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
