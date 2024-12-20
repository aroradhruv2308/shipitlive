import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const AppBar = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  return (
        <nav className="flex justify-between items-center pt-4">
            <div className="flex font-regular space-x-6 text-black text-base  dark:text-white">
                <Link to="/" className="hover:text-gray-500">
                ShipItLive
                </Link>
                <Dropdown/>
                <Link to="/about" className="hover:text-gray-500">
                About
                </Link>
                <a
                href="https://www.linkedin.com/in/dhruvarora2308/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
            >
                LinkedIn
            </a>
            <a
                href="https://x.com/dhruvar74815259" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500">
                    Twitter (x)
                </a>
            </div>

            <div className="flex items-center space-x-4">
                <button
                onClick={() => dispatch(toggleTheme())}
                className="text-black dark:text-white text-2xl"
                >
                {darkMode ? <BsSun /> : <BsMoon />}
                </button>
            </div>
        </nav>
    
  );
};

export default AppBar;
