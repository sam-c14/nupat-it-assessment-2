import React from "react";
import CardImgPng1 from "../assets/images/CardImgPng1.png";
import CardImg2 from "../assets/images/CardImg2.svg";
import CardImg3 from "../assets/images/CardImg3.svg";
import List from "../assets/images/List.svg";
import Links from "../assets/images/Links.svg";
import Comment from "../assets/images/Comment.svg";
import ProfileStack2 from "../assets/images/ProfileStack2.svg";
import PlusDark from "../assets/images/PlusDark.svg";
import OptionsIcon from "../assets/images/OptionsIcon.svg";

const Designs = () => {
  const designs = [
    {
      src: CardImgPng1,
      progressVal: 0,
      isTestingPresent: true,
      isTestingAbove: false,
      placeholder: "To Do",
      count: 3,
    },
    {
      src: CardImg2,
      progressVal: 50,
      isTestingPresent: false,
      isTestingAbove: false,
      placeholder: "InProgress",
      count: 1,
    },
    {
      src: CardImg3,
      progressVal: 100,
      isTestingPresent: true,
      isTestingAbove: true,
      placeholder: "Completed",
      count: 2,
    },
  ];
  return (
    <div
      style={{ paddingLeft: "300px" }}
      className="font-inter bg-secondary mt-0 py-10 pr-8 shadow-sm overflow-hidden"
    >
      <div className="grid lg:pl-8 xl:pl-10 grid-cols-3 gap-x-3">
        {designs.map((design) => (
          <div className="w-11/12 xxl:w-11/12" key={design.placeholder}>
            <div className="inline-flex items-center bg-input pr-4 w-full rounded-md mb-3 py-2">
              <input
                type="text"
                disabled={true}
                placeholder={design.placeholder}
                className="bg-transparent outline-none rounded-sm pl-5 w-full py-1"
              />
              <div className="text-white rounded-md  bg-black px-4 py-2 h-5/6">
                {design.count}
              </div>
            </div>
            {design.isTestingPresent ? (
              !design.isTestingAbove ? (
                <div>
                  <div className="bg-white pb-3 rounded-xl shadow-alt p-1 mt-2 px-2 border">
                    <div className="grid p-3 py-5 place-items-center">
                      <img src={design.src} className="w-full " alt="design" />
                    </div>
                    <div className="mt-2 px-3">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-black font-semibold">
                            Highfidelity Design
                          </h3>
                          <p className="opacity-50 mt-1 text-sm ">
                            Make clear design and color
                          </p>
                        </div>
                        <div>
                          <img src={OptionsIcon} alt="icon" />
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="flex text-sm text-gray-400 items-center gap-2">
                          <img src={List} alt="list" />
                          Progress
                        </p>
                        <p className="font-semibold">2/10</p>
                      </div>
                      <div className="">
                        <progress
                          className="w-full"
                          value={design.progressVal}
                          id={design.progressVal > 60 ? "making-progress" : ""}
                          max={100}
                        ></progress>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="flex gap-5">
                          <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                            <img src={Comment} alt="comment" />
                            <p>7</p>
                          </div>
                          <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                            <img src={Links} alt="links" />
                            <p>2</p>
                          </div>
                        </div>
                        <div>
                          <img src={ProfileStack2} alt="profile-stack" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white pb-3 rounded-xl shadow-alt p-1 mt-2 px-1 border">
                    <div className="mt-2 px-3">
                      <h3 className="text-black font-semibold">
                        Usability Testing
                      </h3>
                      <p className="opacity-50  text-sm mt-1">
                        Make clear design and color
                      </p>
                      <div className="flex justify-between mt-2">
                        <p className="flex text-sm text-gray-400 items-center gap-2">
                          <img src={List} alt="list" />
                          Progress
                        </p>
                        <p className="font-semibold">2/10</p>
                      </div>
                      <div className="">
                        <progress
                          className="w-full"
                          value={design.progressVal}
                          id={design.progressVal > 60 ? "making-progress" : ""}
                          max={100}
                        ></progress>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="flex gap-5">
                          <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                            <img src={Comment} alt="comment" />
                            <p>7</p>
                          </div>
                          <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                            <img src={Links} alt="links" />
                            <p>2</p>
                          </div>
                        </div>
                        <div>
                          <img src={ProfileStack2} alt="profile-stack" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="flex gap-3 w-full mb-5 items-center justify-center px-8 py-3.5 font-normal capitalize rounded-xl mt-4 border-dashed border-black border text-gray-500 border-opacity-10"
                      style={{ background: "#F2F4F5" }}
                    >
                      <img src={PlusDark} /> add task
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-white pb-3 rounded-xl shadow-alt p-1 mt-2 px-1 border">
                    <div className="mt-2 px-3">
                      <h3 className="text-black font-semibold">
                        Usability Testing
                      </h3>
                      <p className="opacity-50  text-sm mt-1">
                        Make clear design and color
                      </p>
                      <div className="flex justify-between mt-2">
                        <p className="flex text-sm text-gray-400 items-center gap-2">
                          <img src={List} alt="list" />
                          Progress
                        </p>
                        <p className="font-semibold">2/10</p>
                      </div>
                      <div className="">
                        <progress
                          className="w-full"
                          value={design.progressVal}
                          id={design.progressVal > 60 ? "making-progress" : ""}
                          max={100}
                        ></progress>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="flex gap-5">
                          <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                            <img src={Comment} alt="comment" />
                            <p>7</p>
                          </div>
                          <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                            <img src={Links} alt="links" />
                            <p>2</p>
                          </div>
                        </div>
                        <div>
                          <img src={ProfileStack2} alt="profile-stack" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white pb-3 rounded-xl shadow-alt p-1 mt-2 px-2 border">
                    <div className="grid p-3 py-5 place-items-center">
                      <img src={design.src} className="w-full " alt="design" />
                    </div>
                    <div className="mt-2 px-3">
                      <div className="flex justify-between ">
                        <div>
                          <h3 className="text-black font-semibold">
                            Highfidelity Design
                          </h3>
                          <p className="opacity-50 mt-1 text-sm ">
                            Make clear design and color
                          </p>
                        </div>
                        <div>
                          <img src={OptionsIcon} alt="icon" />
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <p className="flex text-sm text-gray-400 items-center gap-2">
                          <img src={List} alt="list" />
                          Progress
                        </p>
                        <p className="font-semibold">2/10</p>
                      </div>
                      <div className="">
                        <progress
                          className="w-full"
                          value={design.progressVal}
                          id={design.progressVal > 60 ? "making-progress" : ""}
                          max={100}
                        ></progress>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div className="flex gap-5">
                          <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                            <img src={Comment} alt="comment" />
                            <p>7</p>
                          </div>
                          <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                            <img src={Links} alt="links" />
                            <p>2</p>
                          </div>
                        </div>
                        <div>
                          <img src={ProfileStack2} alt="profile-stack" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="flex gap-3 w-full mb-5 items-center justify-center px-8 py-3.5 font-normal capitalize rounded-xl mt-4 border-dashed border-black border text-gray-500 border-opacity-10"
                      style={{ background: "#F2F4F5" }}
                    >
                      <img src={PlusDark} /> add task
                    </button>
                  </div>
                </div>
              )
            ) : (
              <div>
                <div className="bg-white pb-3 rounded-xl shadow-alt p-1 mt-2 px-2 border">
                  <div className="grid p-3 py-5 place-items-center">
                    <img src={design.src} className="w-full " alt="design" />
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between px-3">
                      <div>
                        <h3 className="text-black font-semibold">
                          Highfidelity Design
                        </h3>
                        <p className="opacity-50 mt-1 text-sm">
                          Make clear design and color
                        </p>
                      </div>
                      <div>
                        <img src={OptionsIcon} alt="icon" />
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 px-3">
                      <p className="flex gap-2 text-sm text-gray-400 items-center">
                        <img src={List} alt="list" />
                        Progress
                      </p>
                      <p className="font-semibold">2/10</p>
                    </div>
                    <div className="px-3">
                      <progress
                        className="w-full"
                        value={design.progressVal}
                        id={design.progressVal > 60 ? "making-progress" : ""}
                        max={100}
                      ></progress>
                    </div>
                    <div className="mt-4 flex justify-between px-3">
                      <div className="flex gap-5">
                        <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                          <img src={Comment} alt="comment" />
                          <p>7</p>
                        </div>
                        <div className="flex gap-2 cursor-pointer opacity-50 items-center">
                          <img src={Links} alt="links" />
                          <p>2</p>
                        </div>
                      </div>
                      <div>
                        <img src={ProfileStack2} alt="profile-stack" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="flex gap-3 w-full mb-5 items-center justify-center py-3.5 f font-normal capitalize rounded-xl mt-4 border-dashed border-black border text-gray-500 border-opacity-10"
                    style={{ background: "#F2F4F5" }}
                  >
                    <img src={PlusDark} /> add task
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Designs;
