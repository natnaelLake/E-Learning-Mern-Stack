import { React, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Header from "../Pages/Header";
import { useFileContext } from "../hooks/useFileContext";
import Sidebar from "./Sidebar";
import { useFiles } from "./adminHooks/useFiles";
// import formatDistanceToNow from "date-fns/formatDistance";

function ManageCourse() {
  const { getCourse } = useFiles();
  const navigate = useNavigate();
  const { fileList } = useFileContext();
  const [imageState, setImageState] = useState("");
  useEffect(() => {
    const manageCrs = async () => {
      setImageState(stud);

      await getCourse();
    };
    manageCrs();
  }, []);
  const handleBack = () => {
    navigate(-1);
  };
  const handleEditCourse = () => {
    navigate("/editCourse");
  };
  const handleAddCourse = () => {
    navigate("/addCourse");
  };
  const { courseTitle } = fileList;
  const stud = "../Assets/student.png";
  console.log("........ T .... ", courseTitle);
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
              onClick={handleBack}
              style={{ float: "left", width: "7rem", marginLeft: "5px" }}
            >
              {" "}
              <Icon.ArrowLeftCircle /> Back
            </Button>
            <Button
              className="align-items-left ml-5"
              onClick={handleAddCourse}
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
                {fileList && (
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    {fileList.map((files) => (
                      <div className="col">
                        <Card className="shadow mb-3 rounded-5 border-5 mt-3 card">
                          <div className="imageCard">
                            <Card.Img
                              variant="top"
                              src={`https://e-learning-web-app-back-end.onrender.com//${files.coverImage}`}
                              className="rounded-5 mainCard"
                            />
                            {console.log("image cover", files.coverImage)}
                          </div>
                          <Card.Body>
                            <Card.Title>{files.courseTitle}</Card.Title>
                            <Card.Text>{files.desc}</Card.Text>
                            <Button
                              onClick={handleEditCourse}
                              variant="outline-danger"
                              className=""
                            >
                              <Icon.Pen /> Edit
                            </Button>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">3 min ago</small>
                          </Card.Footer>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}

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
