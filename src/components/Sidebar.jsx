import React, { useState } from "react";
import HalfClock from "../assets/images/HalfClock.svg";
import Fan from "../assets/images/Fan.svg";
import Bolt from "../assets/images/Bolt.svg";
import Users2 from "../assets/images/Users2.svg";
import AddUser from "../assets/images/AddUser.svg";
import Settings from "../assets/images/Settings.svg";
import Plus from "../assets/images/Plus.svg";
import Burger from "../assets/images/Burger.svg";

const Sidebar = () => {
  const links = [
    {
      icon: HalfClock,
      text: "Dashboard",
    },
    {
      icon: Settings,
      text: "Settings",
    },
    {
      icon: Bolt,
      text: "Activities",
    },
    {
      icon: Users2,
      text: "Users",
    },
    {
      icon: AddUser,
      text: "Added user",
    },
    {
      icon: Fan,
      text: "Affiliate",
    },
  ];
  const endLinks = [
    {
      icon: Bolt,
      text: "Profile",
    },
    {
      icon: Users2,
      text: "Logout",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showMenu = () => {
    const menu = document.querySelector(".menu");
    const burger = document.getElementById("burger");
    // console.log(menu, isMenuOpen);
    if (isMenuOpen) {
      // console.log("Menu is Showing");
      menu.classList.remove("show-top");
      menu.classList.add("hide-top");
      burger.style.borderRadius = "0px";
      burger.style.backgroundColor = "transparent";
      burger.style.padding = "0px";
      document.documentElement.style.overflow = "auto";
    } else {
      menu.classList.remove("hide-top");
      menu.classList.add("show-top");
      burger.style.borderRadius = "100px";
      burger.style.backgroundColor = "white";
      burger.style.padding = "5px";
      document.documentElement.style.overflow = "hidden";
    }
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="h-screen menu flex w-full lg:w-68 py-8 lg:top-auto -top-full flex-wrap transition-smooth justify-center lg:absolute fixed font-inter text-white bg-primary">
        <div className="mb-4">
          <button className="flex gap-3 mb-5 items-center px-8 py-2.5 rounded-md bg-btn_primary">
            <img src={Bolt} /> Welcome Keerth!
          </button>
          <div className="list mt-7">
            <ul className="lg:block w-full grid grid-cols-1">
              {links.map((link) => (
                <li
                  key={link.text}
                  className="flex text-xs md:text-sm gap-3 cursor-pointer mb-7"
                >
                  <img src={link.icon} alt="icon" />
                  {link.text}
                </li>
              ))}
            </ul>
            <hr className="h-0 min-w-0" />
            <ul className="mt-8 lg:block w-full grid md:grid-cols-1 grid-cols-2">
              {endLinks.map((link) => (
                <li
                  key={link.text}
                  className="flex text-xs md:text-sm gap-3 cursor-pointer mb-7 opacity-60"
                >
                  <img src={link.icon} alt="icon" />
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex lg:w-auto sm:w-full sm:justify-center lg:justify-normal items-end">
          <button className="flex gap-3 mb-5 items-center px-8 py-3 font-normal uppercase rounded-md bg-btn_secondary">
            <img src={Plus} /> new project
          </button>
        </div>
      </div>
      <div
        onClick={showMenu}
        className="lg:hidden w-5 sm:right-10 right-5 absolute top-14 sm:top-9"
        id="burger"
      >
        <img src={Burger} alt="hamburger" />
      </div>
    </div>
  );
};

export default Sidebar;
