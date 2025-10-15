import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
 
const Navbar = () => {
  // const navigate = useNavigate();
  const { navigate,  token } = useAppContext();
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img
        onClick={() => navigate("/")}
        src={assets.logo2}
        alt="logo"
        className="w-32 sm:w-44 rounded-2xl  cursor-pointer"
      />
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-violet-600 text-white hover:bg-violet-800 px-10 py-2"
      >
        {token ? "Dashboard" : "Login"}
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
