import React from "react";
import HalfClock from "../assets/images/HalfClock.svg";
import Fan from "../assets/images/Fan.svg";
import Bolt from "../assets/images/Bolt.svg";
import Users2 from "../assets/images/Users2.svg";
import AddUser from "../assets/images/AddUser.svg";
import Settings from "../assets/images/Settings.svg";
import Plus from "../assets/images/Plus.svg";

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
  return (
    <div className="h-screen w-68 py-8 flex-wrap flex justify-center absolute font-inter text-white bg-primary">
      <div className="mb-4">
        <button className="flex gap-3 mb-5 items-center px-8 py-2.5 rounded-md bg-btn_primary">
          <img src={Bolt} /> Welcome Keerth!
        </button>
        <div className="list mt-7">
          <ul>
            {links.map((link) => (
              <li
                key={link.text}
                className="flex text-sm gap-3 cursor-pointer mb-7"
              >
                <img src={link.icon} alt="icon" />
                {link.text}
              </li>
            ))}
          </ul>
          <hr className="h-0 min-w-0" />
          <ul className="mt-8">
            {endLinks.map((link) => (
              <li
                key={link.text}
                className="flex text-sm gap-3 cursor-pointer mb-7 opacity-60"
              >
                <img src={link.icon} alt="icon" />
                {link.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-end">
        <button className="flex gap-3 mb-5 items-center px-8 py-3 font-normal uppercase rounded-md bg-btn_secondary">
          <img src={Plus} /> new project
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
