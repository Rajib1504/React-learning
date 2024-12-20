import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#f0f7fad7] p-0 justify-between items-center">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-36 p-2 z-[9999] shadow"
            >
              <li>
                <Link>Home</Link>
              </li>

              <li>
                <Link>Update Profile</Link>
              </li>

              <li>
                <Link>My Profile</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-1 font-bold  items-center">
            <img
              className="w-20 hidden sm:block"
              src="https://i.ibb.co/5xZDc1k/fotor-2024111812459-removebg-preview.png"
              alt=""
            />
            <h2 className="text-xl sm-text-2xl">Wild Explore</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal gap-2 px-1">
            <li>
              <Link>Home</Link>
            </li>

            <li>
              <Link>Update Profile</Link>
            </li>

            <li>
              <Link>My Profile</Link>
            </li>
          </ul>
        </div>
        {/* tool tip  */}
        <div className=" mx-2 flex gap-2 items-center">
          <div className="tooltip tooltip-bottom z-10">
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Profile Picture" src="" />
              </div>
            </div>
          </div>

          {/* log in  */}

          <button className="btn">Logout</button>

          <Link className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
