import React from "react";
import Sidebar from "./Sidebar";
import Header from "../Pages/Header";
import { Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import imageOne from "../Assets/student.png";
import { useFiles } from "./adminHooks/useFiles";
import {useFileContext} from '../hooks/useFileContext'
import { useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistance";



function ManageCourse() {
  const { getCourse } = useFiles();
  const {fileList} = useFileContext()
  useEffect(()=>{
    const manageCrs = async ()=>{
      
      await getCourse();
    }
    manageCrs();
  },[])
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
                 { fileList.map((files)=>(
                  <div className="col">
                  <Card className="shadow mb-3 rounded-5 border-5 mt-3 card">
                    <div className="imageCard">
                      <Card.Img
                        variant="top"
                        src={imageOne}
                        className="rounded-5 mainCard"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{files.courseTitle}</Card.Title>
                      <Card.Text>{files.desc}</Card.Text>
                      <Button
                        href="/editCourse"
                        variant="outline-danger"
                        className=""
                      >
                        <Icon.Pen /> Edit
                      </Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{formatDistanceToNow(new Date(files.createdAt), {addSuffix:true})}</small>
                    </Card.Footer>
                  </Card>
                  </div>
                 ))
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

export default ManageCourse;
