import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import SidebarContents from "./SidebarContents";
import "../../App.css";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="toggle-button">
        <FaBars onClick={toggleSidebar} />
      </div>
      <div className={sidebarOpen ? "sidebar-wrap" : "sidebar-toggled"}>
        <Navbar className="flex-column">
          <SidebarContents />
        </Navbar>
      </div>
    </div>
  );
};

export default Sidebar;
