import React from "react";
import Header from "../Pages/Header";
import Sidebar from "./Sidebar";
// import { Container, Card, Button, Row, Col, Image,Offcanvas,Modal } from "react-bootstrap";
// import * as Icon from 'react-bootstrap-icons'
import imageOne from "../Assets/constimage.jpeg";
import imageTwo from "../Assets/the big mountain.png";
import imageThree from "../Assets/students.png";
import imageFour from "../Assets/student.png";
import { CDBBtn, CDBView, CDBIframe } from "cdbreact";

import "./style.css";
import * as Icon from "react-bootstrap-icons";
import { Row, Col, Card, Badge, Container,Button } from "react-bootstrap";
function Dashboard() {
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
              <Container style={{ marginTop: "80px" }}>
                <Container>
                  <Row>
                    <Col>
                      <Card style={{ height: "7rem" }}>
                        <Card.Body>
                          <Card.Title>Enrolled Students</Card.Title>
                          <Badge bg="danger">20</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ height: "7rem" }}>
                        <Card.Body>
                          <Card.Title>Course Numbers </Card.Title>
                          <Badge bg="danger">20</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ height: "7rem" }}>
                        <Card.Body>
                          <Card.Title>Total Teachers</Card.Title>
                          <Badge bg="danger">20</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
                <br />
                <br />
                <Container>
                  <Row>
                    <Col>
                      <Card style={{ height: "7rem" }}>
                        <Card.Body>
                          <Card.Title>Active Activities</Card.Title>
                          <Badge bg="danger">20</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ height: "7rem" }}>
                        <Card.Body>
                          <Card.Title>Enrolled Students</Card.Title>
                          <Badge bg="danger">20</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ height: "7rem" }} c>
                        <Card.Body>
                          <Card.Title>Enrolled Students</Card.Title>
                          <Badge bg="danger">20</Badge>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Container>

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

export default Dashboard;
