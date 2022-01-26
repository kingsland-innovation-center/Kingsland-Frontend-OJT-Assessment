import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import {
  authenticatedMenuItems,
  unauthenticatedMenuItems,
} from "./sidebarMenuItems";
import "../../App.css";
import SidebarHeader from "./SidebarHeader";

const SidebarContents = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const authentication = JSON.parse(localStorage.getItem("Authentication"));

  const logout = () => {
    localStorage.setItem("Authentication", "false");
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <Nav className="w-100">
      {authentication ? (
        <div>
          <SidebarHeader />
          <div>
            {authenticatedMenuItems.map((item) =>
              item.title === "Students" ? (
                <div className="dropdown-wrap">
                  <div onClick={handleDropdown}>
                    Students <FaCaretDown className="arrow-down" />
                  </div>
                  <div className={dropdownOpen ? "dropdown" : "close-dropdown"}>
                    {item.subMenuItems.map((subItem) => (
                      <Nav.Link href={subItem.path}>{subItem.title}</Nav.Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Nav.Link href={item.path}>{item.title}</Nav.Link>
              )
            )}
          </div>
          <Nav.Link href={"/"} onClick={logout}>
            Log out
          </Nav.Link>
        </div>
      ) : (
        <div>
          {unauthenticatedMenuItems.map((item) => (
            <Nav.Link href={item.path}>{item.title}</Nav.Link>
          ))}
        </div>
      )}
    </Nav>
  );
};

export default SidebarContents;
