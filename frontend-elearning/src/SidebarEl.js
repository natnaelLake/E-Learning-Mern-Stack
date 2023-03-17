import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from "react-router-dom";

const SidebarEl = () => {
  return (
    <div className=""
      style={{display:'flex',height:'100%',overflow:'scroll intial'}}
    >
      <CDBSidebar 
        textColor="#fff"
        backgroundColor="#333"
      >
        <CDBSidebarHeader 
          prefix = {
            <i className="fa fa-bars fa-large"></i>
          }
        >
          <a href="/" className="text-decoration-none" style={{color:'inherit'}}>Chapter One</a>

        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="columns"
              >
                dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/tables"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="table"
              >
                tables
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/profile"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="user"
              >
                profile
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem
                icon="exclamation-circle"
              >
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px"
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>

    </div>
  );
};

export default SidebarEl;
