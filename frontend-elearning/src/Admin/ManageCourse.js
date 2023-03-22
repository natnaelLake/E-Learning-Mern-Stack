import React from "react";
import Sidebar from "./Sidebar";
import Header from "../Pages/Header";
import { Card, Row, Col, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import imageOne from "../Assets/student.png";

function ManageCourse() {
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
        <Button className ='align-items-left ml-5' href = '/'style = {{float:'left',width:'7rem',marginLeft:'5px'}}> <Icon.ArrowLeftCircle /> Back</Button>
          <div style={{ height: "100%" }}>
            <div
              style={{
                height: "calc(100% - 64px)",
                padding: "20px 5%",
                overflowY: "scroll",
              }}
            >
              <div style={{ margin: "0 auto", maxWidth: "1320px" }}>
                <Row id="welcome">
                  <Col>
                    <Card className="shadow mb-3 rounded-5 border-5 mt-3 card">
                      <div className="imageCard">
                        <Card.Img
                          variant="top"
                          src={imageOne}
                          className="rounded-5 mainCard"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Welcome to React </Card.Title>
                        <Card.Text>Welcome to React</Card.Text>
                        <Button
                          href="/editCourse"
                          variant="outline-danger"
                          className=""
                        >
                          <Icon.Pen /> Edit
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                      <div className="imageCard">
                        <Card.Img
                          variant="top"
                          src={imageOne}
                          className="rounded-5 mainCard"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Welcome to React</Card.Title>
                        <Card.Text>Welcome to React</Card.Text>
                        <Button href="/editCourse" variant="outline-danger">
                          <Icon.Pen /> Edit
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                      <div className="imageCard">
                        <Card.Img
                          variant="top"
                          src={imageOne}
                          className="rounded-5 mainCard"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Welcome to React</Card.Title>
                        <Card.Text>Welcome to React</Card.Text>
                        <Button href="/editCourse" variant="outline-danger">
                          <Icon.Pen /> Edit
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                      <div className="imageCard">
                        <Card.Img
                          variant="top"
                          src={imageOne}
                          className="rounded-5 mainCard"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Welcome to React</Card.Title>
                        <Card.Text>Welcome to React</Card.Text>
                        <Button href="/editCourse" variant="outline-danger">
                          <Icon.Pen /> Edit
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                      <div className="imageCard">
                        <Card.Img
                          variant="top"
                          src={imageOne}
                          className="rounded-5 mainCard"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Welcome to React</Card.Title>
                        <Card.Text>Welcome to React</Card.Text>
                        <Button href="/editCourse" variant="outline-danger">
                          <Icon.Pen /> Edit
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="shadow mb-3 rounded-5 border-5 mt-3">
                      <div className="imageCard">
                        <Card.Img
                          variant="top"
                          src={imageOne}
                          className="rounded-5 mainCard"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>Welcome to React</Card.Title>
                        <Card.Text>Welcome to React</Card.Text>
                        <Button href="/editCourse" variant="outline-danger">
                          <Icon.Pen /> Edit
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br /><br />
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
