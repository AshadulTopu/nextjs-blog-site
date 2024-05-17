import React from "react";
import Links from "./links/Links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="w-full bg-black flex justify-between py-6 px-10">
        <div className="logo">
          <h1 className="text-3xl font-bold text-white">Navbar</h1>
        </div>
        <div className="menu">
          <Links />
        </div>
        {/* <div className="search"></div> */}
        {/* <div className="auth-button">
          <ul className="flex gap-4">
            <li>
              <Link
                href="/login"
                className="text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black"
              >
                Register
              </Link>
            </li>
          </ul>
        </div> */}
        {/* <div className="cart"></div> */}
        {/* <div className="user"></div> */}
      </div>
    </div>
  );
}
