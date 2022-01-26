import React from "react";
import { FaRegImage } from "react-icons/fa";
import "../../App.css";

const SidebarHeader = () => {
  const userName = localStorage.getItem("Name");

  return (
    <div className="sidebar-header">
      <div className="placeholder-photo">
        <FaRegImage />
      </div>
      {userName}
    </div>
  );
};

export default SidebarHeader;
