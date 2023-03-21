import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
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
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/assessment" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Manage Assessment</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/mntcourse" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Manage Courses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/exams" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Manage Exams</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/students" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Manage Students</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
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
