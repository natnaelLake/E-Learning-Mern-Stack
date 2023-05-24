import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
} from "cdbreact";
import { React, useEffect, useState } from "react";
import useFileContext from "./hooks/useFileContext";

import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const SidebarEl = ({ file }) => {
  const [fileData, setFileData] = useState(
    JSON.parse(localStorage.getItem("sidebarEl"))
  );
  const { fileList } = useFileContext();
  const navigate = useNavigate();
  const handleFile = async (vid) => {
    navigate("/videos", { state: { video: vid } });
  };
  const handleDoc = async (vid) => {
    navigate("/files", { state: { file: vid } });
  };
  const handleIntro = async (vid) => {
    navigate("/intro", { state: { intro: vid } });
  };
  const sideFile = useEffect(() => {}, []);
  console.log("....... fileData in side", fileData);
  console.log("....... file in side", file);

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
        <div>
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <div>
              <h6>{fileData.courseTitle}</h6>
            </div>
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <Menu>
                <SubMenu
                  label={`${fileData.session.moduleTitle}`}
                  prefix={<i className="fa fa-address-book" />}
                >
                  {fileList && (
                    <div>
                      {fileData.session.videos.map((file) => (
                        <div>
                          <MenuItem
                            prefix={<i className="fa fa-file " />}
                            key={uuid()}
                            onClick={() => {
                              handleFile(file);
                            }}
                          >
                            {file}
                          </MenuItem>
                        </div>
                      ))}
                      {fileData.session.docs.map((file) => (
                        <div>
                          <MenuItem
                            prefix={<i className="fa fa-code " />}
                            key={uuid()}
                            onClick={() => {
                              handleDoc(file);
                            }}
                          >
                            {file}
                          </MenuItem>
                        </div>
                      ))}
                    </div>
                  )}
                  <MenuItem
                    prefix={<i className="fa fa-file " />}
                    onClick={() => {
                      handleIntro(fileData.description.desc);
                    }}
                  >
                    {fileData.description.descTitle}
                  </MenuItem>
                </SubMenu>
                <MenuItem prefix={<i className="fa fa-code" />}>
                  {" "}
                  Session Two{" "}
                </MenuItem>
                <MenuItem prefix={<i className="fa fa-code" />}>
                  {" "}
                  Session Three{" "}
                </MenuItem>
              </Menu>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </div>
      </CDBSidebar>
      {/*    */}
    </div>
  );
};

export default SidebarEl;
