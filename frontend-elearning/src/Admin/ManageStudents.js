import React from "react";
import Header from "../Pages/Header";
import Sidebar from "./Sidebar";

function ManageStudents() {
  return (
    <div>
      <div className="d-flex">
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
          <Header />
          <div style={{ height: "100%" }}>
            <div
              style={{
                height: "calc(100%-64px)",
                padding: "20px 5%",
                overflowY: "scroll",
              }}
            >
              Manage Students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageStudents;
