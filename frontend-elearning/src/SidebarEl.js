import { React, useState } from "react";
import imageOne from './student.png'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
  CDBStepper,
  CDBStep,
  CDBInput,
  CDBBtn,
  CDBContainer,
  CDBIcon
} from "cdbreact";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import * as Icon from 'react-bootstrap-icons'
import { NavLink, Link } from "react-router-dom";

const SidebarEl = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        height: "100%",
        overflow: "scroll intial",
      }}
    >
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <div
            // className="container"
            // style={{ display: "flex", alignItems: "left" }}
          >
            
            <h6>React And NodeJs</h6>
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Menu>
              <SubMenu
                label="Season One"
                prefix={<i className="fa fa-address-book" />}
              >
                <MenuItem
                  component={<Link to="/intro" />}
                  prefix={<i className="fa fa-file "/>}
                >
                  Introduction of the course{" "}
                </MenuItem>
                <MenuItem
                  component={<Link to="/files" />}
                  prefix={<i className="fa fa-upload"  />}
                >
                  {" "}
                  Course Files
                </MenuItem>
                <MenuItem
                  component={<Link to="/videos" />}
                  prefix={<i className="fa fa-thumbs-up" />}
                >
                  {" "}
                  Course Videos{" "}
                </MenuItem>
                <MenuItem
                  component={<Link to="/quizes" />}
                  prefix={<i className="fa fa-code" />}
                > 
                  {" "}
                  Quzzes{" "}
                </MenuItem>
              </SubMenu>
              <MenuItem prefix={<i className="fa fa-code" />}> Session Two </MenuItem>
              <MenuItem prefix={<i className="fa fa-code" />}> Session Three </MenuItem>
            </Menu>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      {/*    */}
    </div>
  );
};

export default SidebarEl;
