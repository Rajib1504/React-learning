import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div>
      <div className="flex p-2 items-center justify-center min-h-screen  object-right">
        <div className="w-full max-w-md p-8 space-y-6 shadow-xl bg-[#63bde4b7] rounded-lg">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-center">
            Register your account
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-2 ">
            {/* Name Field */}

            <label className="block mb-1 text-sm text-left font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Photo URL Field */}

            <label className="block mb-1 text-left text-sm font-medium">
              Photo URL
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Email Field */}

            <label className="block mb-1 text-sm text-left font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            />

            {/* Password Field */}

            <label className="block mb-1 text-sm text-left font-medium">
              Password
            </label>
            {/* <h2 className="text-left font-semibold">Password:</h2> */}
            <div
              className={`w-full p-2.5 bg-gray-200 text-gray-900 border border-gray-300 rounded-md focus-within:border-gray-500 flex justify-between items-center`}
            >
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="bg-gray-200 w-full border-0 focus:outline-none"
              />
              <div className="cursor-pointer"></div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="terms" className="rounded" />
              <label className="text-sm text-gray-700">
                Accept
                <span className="text-blue-600 cursor-pointer">
                  Term & Conditions
                </span>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full btn py-2 text-white bg-[#e7be78d7] rounded-md hover:bg-[#e3d557d7] focus:outline-none"
            >
              Register
            </button>
          </form>
          <button
            type="submit"
            className="w-full btn py-2 text-white bg-blue-300 rounded-md hover:bg-blue-400 focus:outline-none felx gap-3 items-center"
          >
            <FaGoogle />
            Google Login
          </button>

          <p className="text-center text-sm text-black-500">
            Already Have An Account?
            <Link className="text-red-500 hover:underline">Login</Link>
          </p>

          {/* Register Link */}
        </div>
      </div>
    </div>
  );
};

export default Register;
