import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import React from "react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/dashboard"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            E-learning
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/dashboard" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/assessment" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                Manage Assessment
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/mntcourse" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                Manage Courses
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/exams" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                Manage Exams
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Natnael Lake
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default Sidebar;
