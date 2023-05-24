import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Header from "../../../Pages/Header";
import Sidebar from "../../Sidebar";
import DeleteDoc from "./DeleteDoc";
import UpdateDocInd from "./UpdateDocInd";

function DocMainEdit() {
  return (
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
          href="/docEdit"
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
            <Tabs defaultActiveKey="Update" className="mb-3" fill>
              <Tab eventKey="Update" title="Update">
                <UpdateDocInd />
              </Tab>
              <Tab eventKey="Delete" title="Delete">
                <DeleteDoc />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocMainEdit;
