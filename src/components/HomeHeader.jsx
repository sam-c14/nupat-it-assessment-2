import React from "react";
import ProfileStack from "../assets/images/ProfileStack.svg";
import BoardView from "../assets/images/BoardView.svg";
import List from "../assets/images/List.svg";
import Bolt2 from "../assets/images/Bolt2.svg";
import User2 from "../assets/images/User2.svg";
import Options from "../assets/images/Options.svg";

const HomeHeader = () => {
  const links = [
    {
      icon: User2,
      text: "Participants View",
    },
    {
      icon: BoardView,
      text: "Board View",
    },
    {
      icon: List,
      text: "List View",
    },
    {
      icon: Bolt2,
      text: "Power View",
    },
  ];
  return (
    <div
      style={{ paddingLeft: "300px" }}
      className="font-inter bg-white pb-4 pt-11 pr-8 shadow-alt_2"
    >
      <div className="w-full pl-10 pr-11 flex justify-between ">
        <div>
          <h1 className="capitalize leading-10 font-semibold text-4xl">
            new campaign run
          </h1>
          <p className="opacity-50 xxl:mt-0 xl:mt-2 text-sm">
            A new campaign launch work for brand new featur in May month
          </p>
        </div>
        <div>
          <button className="flex gap-3 mb-2 items-center px-8 py-2.5 rounded-lg text-sm uppercase text-white bg-black">
            add members
          </button>
        </div>
      </div>
      <div className="nav pl-10 pr-11 mt-10 flex justify-between items-center">
        <div className="flex gap-2 w-1/5 items-center">
          <img src={ProfileStack} alt="profile-stack" />
          <p className="opacity-50 text-sm">8 members</p>
        </div>
        <div className="xl:w-1/2 lg:w-3/5 flex items-center">
          <ul className="flex w-full pt-2 justify-between">
            {links.map((link) => (
              <li
                key={link.text}
                className="flex text-sm cursor-pointer gap-3 mb-1"
              >
                <img src={link.icon} alt="icon" />
                {link.text}
              </li>
            ))}
            <li className="cursor-pointer">
              <img src={Options} alt="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
