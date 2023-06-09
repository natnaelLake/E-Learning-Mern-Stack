import { React } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Pages/Header";
import { useStudentContext } from "../../hooks/useStudentContext";
import Sidebar from "../Sidebar";
import { useStudents } from "../adminHooks/useStudents";
import Delete from "./Delete";

function EditAss() {
  const location = useLocation();
  const navigate = useNavigate();
  const { studentList } = useStudentContext();
  const { getStudents } = useStudents();
  console.log(".........   ", studentList);
  // console.log(id)
  const indStud = location.state.student;
  // const changeData = location.state
  // console.log(' ...... change',changeData)
  // console.log('indvidula id :',indId)
  const handleAssessement = () => {
    navigate("/assessment");
  };
  return (
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
            onClick={handleAssessement}
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
                <Tabs defaultActiveKey="Delete" className="mb-3" fill>
                  {/* <Tab eventKey="Add" title='Add' bg = 'dark'><Add /></Tab> */}
                  {/* <Tab eventKey="Update" title = 'Update'><Update student = {indStud}/></Tab> */}
                  <Tab eventKey="Delete" title="Delete">
                    <Delete student={indStud} />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAss;
