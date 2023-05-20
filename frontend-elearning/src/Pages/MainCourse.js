import React from "react";
import * as Icon from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import imageOne from "../Assets/constimage.jpeg";
import imageTwo from "../Assets/student.png";

import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
// import { Profile } from "../pages/Profile";
import { CDBBtn, CDBIframe, CDBView } from "cdbreact";
import SidebarEl from "../SidebarEl";
import Header from './Header'
import './style.css'
import './courses.css'
import { useNavigate } from "react-router-dom";
import useFileContext from "../hooks/useFileContext";
import {Card,Button} from 'react-bootstrap'
import formatDateDistance from 'date-fns/formatDistanceToNow'


function MainCourse() {
    const navigate = useNavigate();
    const {fileList} = useFileContext();
  const handleLearn = async (stud) => {
   stud && await navigate("/courses", { state: { course: stud } });
  };
  // const style = {padding}
//   console.log('course file ',location.state.course)

//   const location = useLocation()
//   const file = location.state.course || ''
//   localStorage.setItem('sidebarEl',JSON.stringify(file))

//   console.log(' file in side course page',file)
  return (
    <div className="d-flex profile">
      <div>
        {/* {file !=='' ? <SidebarEl file = {file}/> : null}  */}
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
        <Header className = 'p-5'></Header>
        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              padding: "20px 5%",
              overflowY: "scroll",
            }}
          >
            <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
            <div>
      {fileList && (
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {fileList.map((files) => (
            <div className="col">
              <Card className="shadow mb-3 rounded-5 border-5 mt-3 card" key = {files._id}>
                <div className="imageCard">
                  <Card.Img
                    variant="top"
                    src={`http://localhost:8000/uploads/${files.coverImage}`}
                    className="rounded-5 mainCard"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{files.courseTitle}</Card.Title>
                  <Card.Text>{files.description.desc}</Card.Text>
                  <Button
                    href="/courses"
                    variant="outline-success"
                    className=""
                    onClick={() => {
                      // await deleteStudent(student._id)
                      handleLearn(files);
                      // console.log(student._id);
                    }}
                  >
                    <Icon.Book /> Learn
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {formatDateDistance(new Date(files.createdAt), {
                      addSuffix: true,
                    })}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCourse;
