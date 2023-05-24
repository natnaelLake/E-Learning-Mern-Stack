import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Header from "../../Pages/Header";
import Sidebar from "../Sidebar";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";

function EditCourse() {
  const navigate = useNavigate();
  const handleEditCourse = () => {
    navigate("/mntcourse");
  };
  return (
    <div>
      <div>
        <div className="d-flex profile">
          <div>
            <Sidebar />
          </div>
          <div
            style={{
              flex: "1 1 auto",
              display: "flex",
              flexFlow: "column",
              height: "100vh",
              overflowY: "hidden",
            }}
          >
            <Header className="p-5"></Header>
            <Button
              className="align-items-left ml-5"
              onClick={handleEditCourse}
              style={{ float: "left", width: "7rem", marginLeft: "5px" }}
            >
              {" "}
              <Icon.ArrowLeftCircle /> Back
            </Button>

            <div style={{ height: "100%" }}>
              <div
                style={{
                  height: "calc(100% - 64px)",
                  padding: "20px 5%",
                  overflowY: "scroll",
                }}
              >
                <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
                  <Tabs defaultActiveKey="Add" className="m-5" fill>
                    <Tab eventKey="Add" title="Add ">
                      <Add />
                    </Tab>
                    <Tab eventKey="Update" title="Update ">
                      <Update />
                    </Tab>
                    <Tab eventKey="Delete" title="Delete">
                      <Delete />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
