"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Links() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "blog",
      path: "/blog",
    },
  ];
  //   const auth = [
  //     {
  //       name: "Login",
  //       path: "/login",
  //     },
  //     {
  //       name: "Register",
  //       path: "/register",
  //     },
  //     {
  //       name: "Admin",
  //       path: "/admin",
  //     },
  //   ];

  // tamporary data
  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className="hidden lg:block">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                  pathname == link.path ? "bg-white text-black" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* auth route */}
          <li>
            {session ? (
              isAdmin ? (
                <Link
                  href={"/admin"}
                  className={`text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                    pathname == "admin" ? "bg-white text-black" : ""
                  }`}
                >
                  Admin
                </Link>
              ) : (
                <Link
                  href={"/login"}
                  className={`text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                    pathname == "login" ? "bg-white text-black" : ""
                  }`}
                >
                  Login
                </Link>
              )
            ) : (
              <Link
                href={"/register"}
                className={`text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                  pathname == "register" ? "bg-white text-black" : ""
                }`}
              >
                Register
              </Link>
            )}
          </li>
        </ul>
      </div>
      {/* mobile menu */}
      <div className="mobile-menu lg:hidden">
        <div className="menu-toggle-btn">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="px-4 py-2 rounded-sm bg-red-500 flex flex-col"
          >
            =
          </button>
        </div>
        {openMenu && (
          <div className="absolute right-0 top-0 translate-y-[80px] h-full w-1/2 bg-black flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                      pathname == link.path ? "bg-white text-black" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {/* auth route */}
              <li>
                {session ? (
                  isAdmin ? (
                    <Link
                      href={"/admin"}
                      className={`text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                        pathname == "admin" ? "bg-white text-black" : ""
                      }`}
                    >
                      Admin
                    </Link>
                  ) : (
                    <Link
                      href={"/login"}
                      className={`text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                        pathname == "login" ? "bg-white text-black" : ""
                      }`}
                    >
                      Login
                    </Link>
                  )
                ) : (
                  <Link
                    href={"/register"}
                    className={`text-white bg-black px-4 py-2 rounded-full duration-300 hover:scale-105 hover:bg-white hover:text-black ${
                      pathname == "register" ? "bg-white text-black" : ""
                    }`}
                  >
                    Register
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
