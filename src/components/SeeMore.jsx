import React from "react";
import viewlist from "../assets/ViewList.svg"
import {Link } from 'react-router-dom'


const SeeMore = ({to,smallView}) => {
  return (
    <div className={`${smallView ? "block" : "hidden"}`}>
      <Link
        to={`/${to}`}
        className="bg-secondary px-[20px] py-[10px] flex justify-center items-center max-w-[170px] my-[38px] rounded-[12px] cursor-pointer"
      >
        <img src={viewlist} alt="" />
        <p className="font-inter text-[14px] ">See More</p>
      </Link>
    </div>
  );
};

export default SeeMore;
