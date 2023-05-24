import { React, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
// import * as Icon from 'react-bootstrap-icons'
import { CDBBtn } from "cdbreact";
import imageFour from "../Assets/student.png";
import imageTwo from "../Assets/the big mountain.png";

import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useFiles } from "../Admin/adminHooks/useFiles";
import useFileContext from "../hooks/useFileContext";
import CourseCards from "./CourseCards";
import Paging from "./Paging";
import "./style.css";

function Home() {
  const [show, setShow] = useState(false);
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage, setCoursePerPage] = useState(6);
  const { getCourse } = useFiles();
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const { fileList } = useFileContext();
  // const {user} = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const manageChange = async () => {
      await getCourse();
      setCourses(fileList);
    };
    manageChange();
  }, []);
  // console.log( 'fkjsfd fdjhjk ......',user.user.role)
  const indexOfLastCourse = currentPage * coursePerPage;
  const indexOfFisrtCourse = indexOfLastCourse - coursePerPage;
  let currentCourses;
  {
    fileList !== null
      ? (currentCourses = fileList.slice(indexOfFisrtCourse, indexOfLastCourse))
      : (currentCourses = null);
  }
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const handleStartLearning = () => [navigate("/courses")];
  const firstPage = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const prevPage = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const nextPage = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  const lastPage = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };
  let fileLength;
  if (fileList !== null) {
    fileLength = fileList.length;
  } else fileLength = 0;
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
              onClick={handleStartLearning}
              style={{ width: "200px", height: "50px" }}
            >
              Start Learning &nbsp;&nbsp;&nbsp; <Icon.ArrowRight size={30} />
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="outline-danger"
              href="#welcome"
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
          <Col id="welcome">
            <div className="">
              <h1 className="text-primary">Featured Courses</h1>
            </div>
            <br />
            <hr />
          </Col>
        </Row>
        <CourseCards courses={currentCourses} />
        <Row>
          {fileList && (
            <Paging
              currentPage={currentPage}
              coursePerPage={coursePerPage}
              totalPage={fileLength}
              paginate={paginate}
              firstPage={firstPage}
              nextPage={nextPage}
              prevPage={prevPage}
              lastPage={lastPage}
            />
          )}
        </Row>
        <br />
        <br />
        <footer className="d-flex mx-auto py-4">
          <small className="mx-auto my-1 text-center">
            &copy; Natnael Lake , all my rights are reserved
          </small>
        </footer>
        <br />
        <br />
        <Row>
          <Col>
            <div className="">
              <h1 className="text-primary">Course Lectures</h1>
            </div>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              className="shadow-none border-0 mb-4"
              style={{ width: "15rem" }}
              onClick={handleShow}
            >
              <Image
                src={imageTwo}
                roundedCircle
                width="100"
                height="100"
                className="border shadow align-items-center mx-auto"
              />
              <Card.Body className="">
                <Card.Title>Ethiopia</Card.Title>
                <Card.Text>This is the software engineer</Card.Text>
              </Card.Body>
            </Card>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="true"
              scroll="true"
              position="top-right"
              side
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Title className="text-align: center">
                <img
                  alt="cardImg"
                  className="mx-auto border rounded-circle bg-dark"
                  width="130px"
                  src={imageTwo}
                />
              </Modal.Title>
              <br />
              <Modal.Body className="text-align:center">
                <div>
                  <div className="border-0">
                    <div className="p-3 d-flex flex-column align-items-center mb-4 text-center">
                      <h4 style={{ fontWeight: "600" }}>Bewuketu Lake</h4>
                      <p>Software Developer</p>
                      <p className="text-muted">Addis Ababa, Ethiopia</p>
                      <div className="d-flex justify-content-center flex-wrap">
                        <CDBBtn className="mr-2" size="small" color="dark">
                          <i className="fas fa-user-plus"></i> Connect
                        </CDBBtn>
                        <CDBBtn size="small" color="warning">
                          {" "}
                          Send Message{" "}
                        </CDBBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col>
            <Card
              className="shadow-none border-0 mb-4"
              style={{ width: "15rem" }}
              onClick={handleShow}
            >
              <Image
                src={imageTwo}
                roundedCircle
                width="100"
                height="100"
                className="border shadow align-items-center mx-auto"
              />
              <Card.Body className="">
                <Card.Title>Ethiopia</Card.Title>
                <Card.Text>This is the software engineer</Card.Text>
              </Card.Body>
            </Card>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="true"
              scroll="true"
              position="top-right"
              side
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Title className="text-align: center">
                <img
                  alt="cardImg"
                  className="mx-auto border rounded-circle bg-dark"
                  width="130px"
                  src={imageTwo}
                />
              </Modal.Title>
              <br />
              <Modal.Body className="text-align:center">
                <div>
                  <div className="border-0">
                    <div className="p-3 d-flex flex-column align-items-center mb-4 text-center">
                      <h4 style={{ fontWeight: "600" }}>Bewuketu Lake</h4>
                      <p>Software Developer</p>
                      <p className="text-muted">Addis Ababa, Ethiopia</p>
                      <div className="d-flex justify-content-center flex-wrap">
                        <CDBBtn className="mr-2" size="small" color="dark">
                          <i className="fas fa-user-plus"></i> Connect
                        </CDBBtn>
                        <CDBBtn size="small" color="warning">
                          {" "}
                          Send Message{" "}
                        </CDBBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col>
            <Card
              className="shadow-none border-0 mb-4"
              style={{ width: "15rem" }}
              onClick={handleShow}
            >
              <Image
                src={imageTwo}
                roundedCircle
                width="100"
                height="100"
                className="border shadow align-items-center mx-auto"
              />
              <Card.Body className="">
                <Card.Title>Ethiopia</Card.Title>
                <Card.Text>This is the software engineer</Card.Text>
              </Card.Body>
            </Card>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="true"
              scroll="true"
              position="top-right"
              side
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Title className="text-align: center">
                <img
                  alt="cardImg"
                  className="mx-auto border rounded-circle bg-dark"
                  width="130px"
                  src={imageTwo}
                />
              </Modal.Title>
              <br />
              <Modal.Body className="text-align:center">
                <div>
                  <div className="border-0">
                    <div className="p-3 d-flex flex-column align-items-center mb-4 text-center">
                      <h4 style={{ fontWeight: "600" }}>Bewuketu Lake</h4>
                      <p>Software Developer</p>
                      <p className="text-muted">Addis Ababa, Ethiopia</p>
                      <div className="d-flex justify-content-center flex-wrap">
                        <CDBBtn className="mr-2" size="small" color="dark">
                          <i className="fas fa-user-plus"></i> Connect
                        </CDBBtn>
                        <CDBBtn size="small" color="warning">
                          {" "}
                          Send Message{" "}
                        </CDBBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col>
            <Card
              className="shadow-none border-0 mb-4"
              style={{ width: "15rem" }}
              onClick={handleShow}
            >
              <Image
                src={imageTwo}
                roundedCircle
                width="100"
                height="100"
                className="border shadow align-items-center mx-auto"
              />
              <Card.Body className="">
                <Card.Title>Ethiopia</Card.Title>
                <Card.Text>This is the software engineer</Card.Text>
              </Card.Body>
            </Card>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="true"
              scroll="true"
              position="top-right"
              side
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Title className="text-align: center">
                <img
                  alt="cardImg"
                  className="mx-auto border rounded-circle bg-dark"
                  width="130px"
                  src={imageTwo}
                />
              </Modal.Title>
              <br />
              <Modal.Body className="text-align:center">
                <div>
                  <div className="border-0">
                    <div className="p-3 d-flex flex-column align-items-center mb-4 text-center">
                      <h4 style={{ fontWeight: "600" }}>Bewuketu Lake</h4>
                      <p>Software Developer</p>
                      <p className="text-muted">Addis Ababa, Ethiopia</p>
                      <div className="d-flex justify-content-center flex-wrap">
                        <CDBBtn className="mr-2" size="small" color="dark">
                          <i className="fas fa-user-plus"></i> Connect
                        </CDBBtn>
                        <CDBBtn size="small" color="warning">
                          {" "}
                          Send Message{" "}
                        </CDBBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
