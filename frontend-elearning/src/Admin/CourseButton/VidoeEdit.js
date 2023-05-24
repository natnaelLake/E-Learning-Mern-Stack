import { React, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import imageOne from "../../Assets/student.png";
import Header from "../../Pages/Header";
import { useFileContext } from "../../hooks/useFileContext";
import Sidebar from "../Sidebar";
import { useFiles } from "../adminHooks/useFiles";

function VidoeEdit() {
  const navigate = useNavigate();
  const { getCourse } = useFiles();
  const { fileList } = useFileContext();
  const handleEditCourse = () => {
    navigate("/editCourse");
  };
  const handleIndVideo = () => {
    navigate("/indVideo");
  };
  useEffect(() => {
    const editVideo = async () => {
      await getCourse();
    };
    editVideo();
  }, []);

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
          onClick={handleEditCourse}
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
              {fileList && (
                <div class="row row-cols-1 row-cols-md-3 g-4">
                  {fileList.map((files) => {
                    <div class="col">
                      <Card className="shadow mb-3 rounded-5 border-5 mt-3 card">
                        <div className="imageCard">
                          <Card.Img
                            variant="top"
                            src={imageOne}
                            className="rounded-5 mainCard"
                          />
                        </div>
                        <Card.Body>
                          <Card.Title>{files.title}</Card.Title>
                          <Card.Text>{files.desc}</Card.Text>
                          <Button
                            onClick={handleIndVideo}
                            variant="outline-danger"
                            className=""
                          >
                            <Icon.Pen /> Edit
                          </Button>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">updated 3min ago</small>
                        </Card.Footer>
                      </Card>
                    </div>;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VidoeEdit;
