import React from "react";
import Sidebar from "./Sidebar";
import Header from "../Pages/Header";
import { Table, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useStudentContext } from "../Context/StudentsContext";
// import './style.css'

function ManageAssesment() {
  const { studentList } = useStudentContext();
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
          href="/"
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
              {studentList &&
                studentList.map((student) => {
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Quize Result</th>
                        <th>Mid Exam Result</th>
                        <th>Final Exam Result</th>
                        <th>Total Result</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {student.firstname}&nbsp{student.lastname}
                        </td>
                        <td>5</td>
                        <td>25</td>
                        <td>50</td>
                        <td>100</td>
                        <td>
                          <Button bg="danger" href="/edit">
                            <Icon.Pen /> Edit
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {student.firstname}&nbsp{student.lastname}
                        </td>
                        <td>5</td>
                        <td>25</td>
                        <td>50</td>
                        <td>100</td>
                        <td>
                          <Button bg="danger" href="/edit">
                            <Icon.Pen /> Edit
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {student.firstname}&nbsp{student.lastname}
                        </td>
                        <td>5</td>
                        <td>25</td>
                        <td>50</td>
                        <td>100</td>
                        <td>
                          <Button bg="danger" href="/edit">
                            <Icon.Pen /> Edit
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {student.firstname}&nbsp{student.lastname}
                        </td>
                        <td>5</td>
                        <td>25</td>
                        <td>50</td>
                        <td>100</td>
                        <td>
                          <Button href="/edit" bg="danger">
                            <Icon.Pen /> Edit
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>;
                })}
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

export default ManageAssesment;
