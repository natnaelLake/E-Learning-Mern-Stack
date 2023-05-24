import React from "react";
import * as Icon from "react-bootstrap-icons";
import formatDateDistance from "date-fns/formatDistanceToNow";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useFileContext from "../hooks/useFileContext";
import Header from "./Header";
import "./courses.css";
import "./style.css";

function MainCourse() {
  const navigate = useNavigate();
  const { fileList } = useFileContext();
  const handleLearn = async (stud) => {
    stud && (await navigate("/courses", { state: { course: stud } }));
  };
  return (
    <div className="d-flex profile">
      <div>{/* {file !=='' ? <SidebarEl file = {file}/> : null}  */}</div>
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
                        <Card
                          className="shadow mb-3 rounded-5 border-5 mt-3 card"
                          key={files._id}
                        >
                          <div className="imageCard">
                            <Card.Img
                              variant="top"
                              src={`https://e-learning-web-app-back-end.onrender.com/uploads/${files.coverImage}`}
                              className="rounded-5 mainCard"
                            />
                          </div>
                          <Card.Body>
                            <Card.Title>{files.courseTitle}</Card.Title>
                            <Card.Text>{files.description.desc}</Card.Text>
                            <Button
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
