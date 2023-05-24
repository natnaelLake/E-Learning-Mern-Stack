import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Header from "../Pages/Header";
import Final from "./ExamControl/Final";
import Mid from "./ExamControl/Mid";
import Quiz from "./ExamControl/Quiz";
import Sidebar from "./Sidebar";

function ManageExams() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
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
          onClick={handleBack}
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
              <Tabs defaultActiveKey="Quiz Exam" className="mb-3" fill>
                <Tab eventKey="Quiz Exam" title="Quiz Exam" bg="dark">
                  <Quiz />
                </Tab>
                <Tab eventKey="Mid Exam" title="Mid Exam">
                  <Mid />
                </Tab>
                <Tab eventKey="Final Exam" title="Final Exam">
                  <Final />
                </Tab>
              </Tabs>
              <br />
              <br />
              <footer className="d-flex mx-auto py-4">
                <small className="mx-auto my-1 text-center">
                  &copy; Natnael Lake , all my rights are reserved
                </small>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageExams;
