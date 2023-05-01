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
      className="font-inter bg-white pb-4 pt-11 lg:pl-0 pl-8 pr-8 shadow-alt_2"
      id="home-component"
    >
      <div className="w-full lg:px-8 xl:px-10 flex md:justify-between md:gap-0 gap-y-3 flex-wrap">
        <div className="md:w-auto w-full">
          <h1 className="capitalize leading-10 font-semibold text-4xl">
            new campaign run
          </h1>
          <p className="opacity-50 xxl:mt-0 mt-3.5 xl:mt-2 md:text-sm text-xs xxl:text-base">
            A new campaign launch work for brand new featur in May month
          </p>
        </div>
        <div className="sm:w-auto w-full">
          <button className="flex gap-3 mb-2 items-center px-8 py-2.5 rounded-lg text-sm uppercase text-white bg-black">
            add members
          </button>
        </div>
      </div>
      <div className="nav lg:px-8  xl:px-10 mt-10 flex md:justify-between flex-wrap items-center">
        <div className="flex gap-2 w-full md:w-1/5 items-center">
          <img src={ProfileStack} alt="profile-stack" />
          <p className="opacity-50 text-sm">8 members</p>
        </div>
        <div className="xl:w-1/2 xxl:w-1/3 md:w-auto w-full lg:w-3/5 flex items-center">
          <ul className="md:flex grid grid-cols-2 w-full pt-2 justify-between">
            {links.map((link) => (
              <li
                key={link.text}
                className="flex md:text-sm text-xs cursor-pointer gap-3 mb-1"
              >
                <img src={link.icon} alt="icon" />
                {link.text}
              </li>
            ))}
            <li className="cursor-pointer pt-0.5">
              <img src={Options} alt="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
