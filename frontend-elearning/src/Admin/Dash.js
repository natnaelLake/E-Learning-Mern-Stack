import React from "react";
import Sidebar from "./Sidebar";
import Header from "../Pages/Header";
import { Card, Button,Badge } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import imageOne from "../Assets/student.png";
import { useFiles } from "./adminHooks/useFiles";
import {useFileContext} from '../hooks/useFileContext'


function Dashboard() {
  const { getCourse } = useFiles();
  const {fileList} = useFileContext()
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
          <div>
            <Button
              className="align-items-left ml-5"
              href="/"
              style={{ float: "left", width: "7rem", marginLeft: "5px" }}
            >
              {" "}
              <Icon.ArrowLeftCircle /> Back
            </Button>
            <Button
              className="align-items-left ml-5"
              href="/addCourse"
              style={{ float: "left", width: "10rem", marginLeft: "5px" }}
              variant="success"
            >
              {" "}
              <Icon.PlusCircleFill /> Add Course
            </Button>
          </div>

          <div style={{ height: "100%" }}>
            <div
              style={{
                height: "calc(100% - 64px)",
                padding: "20px 5%",
                overflowY: "scroll",
              }}
            >
              <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
                {
                  fileList && <div class="row row-cols-1 row-cols-md-3 g-4">
                 { fileList.map((files)=>{
                  <div class="col">
                     <Card style={{ height: "7rem" }}>
                   <Card.Body>
                    <Card.Title>Enrolled Students</Card.Title>
                    <Badge bg="danger">20</Badge>
                 </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">updated 3min ago</small>
                    </Card.Footer>
                  </Card>
                  </div>
                 })
                    }
                </div>
                }

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
    </div>
  );
}

export default Dashboard;
