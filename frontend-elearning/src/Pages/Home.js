import React from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
// import * as Icon from 'react-bootstrap-icons'
import imageOne from "../constimage.jpeg";
import imageTwo from "../the big mountain.png";
import imageThree from "../students.png";
import imageFour from "../student.png";

import "./style.css";
import * as Icon from "react-bootstrap-icons";

function Home() {
  return (
    <div className="">
      <Container>
        <Row>
          <Col>
            <div className="top-text ">
              <h1 className="text-info">
                Welcome to the <br />
                E-Learning Page
              </h1>
            </div>
            <br />
            <br />
            <p className="text-secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              recusandae, iusto mollitia, porro corrupti iste voluptas illo rem
              atque harum labore eos dicta quod libero reiciendis. Veniam nobis
              cupiditate aut?
            </p>
            <Button
              variant="primary"
              href = '/courses'
              style={{ width: "200px", height: "50px" }}
            >
              Start Learning &nbsp;&nbsp;&nbsp; <Icon.ArrowRight size={30} />
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="outline-danger"
              href = '#welcome'
              style={{ width: "200px", height: "50px" }}
            >
              More Information <Icon.ArrowDown size={30} />
            </Button>
          </Col>

          <Col>
            <div className="pl-5">
              <Image src={imageFour} className="mb-5 mt-0" />
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
            <div className="">
                <h1 className="text-primary">Featured Courses</h1>
            </div>
            <br />
            <hr />
            </Col>
        </Row>
        <Row id = 'welcome'>
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
                <Button variant="outline-success" className="">
                  <Icon.Book /> Learn
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
                <Button variant="outline-success">
                  <Icon.Book /> Learn
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
                <Button variant="outline-success">
                  <Icon.Book /> Learn
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
                <Button variant="outline-success">
                  <Icon.Book /> Learn
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
                <Button variant="outline-success">
                  <Icon.Book /> Learn
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
                <Button variant="outline-success">
                  <Icon.Book /> Learn
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
