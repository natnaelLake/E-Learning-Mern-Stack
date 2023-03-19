import { React, useState } from "react";
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
} from "cdbreact";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { NavLink } from "react-router-dom";

const SidebarEl = () => {
  const [active, setActive] = useState(1);

  const handleNextPrevClick = a => {
    setActive(a);
  };

  const handleSubmission = () => {
    alert('Form submitted!');
  };
  return (
    <div
      className=""
      style={{ display: "flex", height: "100%", overflow: "scroll intial",backgroundColor :'green' ,color:'green' }}
    >
      <Sidebar backgroundColor="white">
  <Menu>
    <SubMenu label="React And NodeJs" backgroundColor="white">
      <NavLink  to = '/courses'>
        <MenuItem backgroundColor="black" color="green" variant = 'green'>Introduction of the course </MenuItem>
      </NavLink>
      <NavLink  to = '/courses'>
        <MenuItem backgroundColor="black" color="green" variant = 'green'> Course Files</MenuItem>
      </NavLink>
      <NavLink  to = '/courses'>
        <MenuItem backgroundColor="black" color="green" variant = 'green'> Course Videos </MenuItem>
      </NavLink>
      <NavLink  to = '/courses'>
        <MenuItem backgroundColor="black" color="green" variant = 'green'> Quzzes  </MenuItem>
      </NavLink>
    </SubMenu>
    <MenuItem> Session Two </MenuItem>
    <MenuItem> Session Three </MenuItem>
  </Menu>
</Sidebar>
    </div>
  );
};

export default SidebarEl;
