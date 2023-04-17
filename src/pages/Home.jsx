import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import HomeHeader from "../components/HomeHeader";
import Designs from "../components/Designs";

const Home = () => {
  useEffect(() => {
    document.documentElement.classList.add("disable-scroll");
  }, []);

  return (
    <div className="w-full overflow-auto xxl:h-auto lg:h-screen">
      <Sidebar />
      <HomeHeader />
      <Designs />
    </div>
  );
};

export default Home;
