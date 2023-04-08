import { React, useState,useEffect } from "react";
import { Container, Card, Button, Row, Col, Image, Offcanvas, Modal,Pagination } from "react-bootstrap";
// import * as Icon from 'react-bootstrap-icons'
import imageOne from "../Assets/constimage.jpeg";
import imageTwo from "../Assets/the big mountain.png";
import imageThree from "../Assets/students.png";
import imageFour from "../Assets/student.png";
import { CDBBtn } from 'cdbreact'

import "./style.css";
import * as Icon from "react-bootstrap-icons";
import useFileContext from "../hooks/useFileContext";
import CourseCards from "./CourseCards";



function Home() {
  const [show, setShow] = useState(false)
  const [courses,setCourses] = useState([]);
  const [currentPage,setCurrentPage] = useState(1)
  const [coursePerPage,setCoursePerPage] = useState(6)

  const handleClose = () => { setShow(false) }
  const handleShow = () => { setShow(true) }
  const { fileList } = useFileContext();
  useEffect(()=>{
    const manageChange = ()=>{
        setCourses(fileList)
    }
    manageChange();
  },[])
  console.log( 'fkjsfd fdjhjk ......',courses,fileList)
  const indexOfLastCourse = currentPage*coursePerPage
  const indexOfFisrtCourse = indexOfLastCourse - coursePerPage;
  let currentCourses 
  {fileList  !== null ? currentCourses = fileList.slice(indexOfFisrtCourse,indexOfLastCourse):currentCourses = null}

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
              href='/courses'
              style={{ width: "200px", height: "50px" }}
            >
              Start Learning &nbsp;&nbsp;&nbsp; <Icon.ArrowRight size={30} />
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="outline-danger"
              href='#welcome'
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
        <CourseCards courses= {currentCourses}/>
        <Row >
          <Pagination className="justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
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
            <Card className="shadow-none border-0 mb-4" style={{ width: '15rem' }} onClick={handleShow}>
              <Image src={imageTwo} roundedCircle width='100' height='100' className="border shadow align-items-center mx-auto" />
              <Card.Body className=''>
                <Card.Title>Ethiopia</Card.Title>
                <Card.Text>This is the software engineer</Card.Text>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} backdrop='true' scroll='true' position='top-right' side >
              <Modal.Header closeButton>

              </Modal.Header>
              <Modal.Title className='text-align: center'>

                <img
                  alt="cardImg"
                  className="mx-auto border rounded-circle bg-dark"
                  width="130px"
                  src={imageTwo}
                />
              </Modal.Title>
              <br />
              <Modal.Body className='text-align:center'>
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
                <Button variant='danger' onClick={handleClose} >Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col>
            <Card className="shadow-none border-0 mb-4" style={{ width: '15rem' }} onClick={handleShow}>
              <Image src={imageTwo} roundedCircle width='100' height='100' className="border shadow align-items-center mx-auto" />
              <Card.Body className=''>
                <Card.Title>Ethiopia</Card.Title>
                <Card.Text>This is the software engineer</Card.Text>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} backdrop='true' scroll='true' position='top-right' side >
              <Modal.Header closeButton>

              </Modal.Header>
              <Modal.Title className='text-align: center'>

                <img
                  alt="cardImg"
                  className="mx-auto border rounded-circle bg-dark"
                  width="130px"
                  src={imageTwo}
                />
              </Modal.Title>
              <br />
              <Modal.Body className='text-align:center'>
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
                <Button variant='danger' onClick={handleClose} >Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col>
            <Card className="shadow-none border-0 mb-4" style={{ width: '15rem' }} onClick={handleShow}>
              <Image src={imageTwo} roundedCircle width='100' height='100' className="border shadow align-items-center mx-auto" />
              <Card.Body className=''>
                <Card.Title>Ethiopia</Card.Title>
                <Card.Text>This is the software engineer</Card.Text>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} backdrop='true' scroll='true' position='top-right' side >
              <Modal.Header closeButton>

              </Modal.Header>
              <Modal.Title className='text-align: center'>

                <img
                  alt="cardImg"
                  className="mx-auto border rounded-circle bg-dark"
                  width="130px"
                  src={imageTwo}
                />
              </Modal.Title>
              <br />
              <Modal.Body className='text-align:center'>
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
                <Button variant='danger' onClick={handleClose} >Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
          <Col>
            <Card className="shadow-none border-0 mb-4" style={{ width: '15rem' }} onClick={handleShow}>
              <Image src={imageTwo} roundedCircle width='100' height='100' className="border shadow align-items-center mx-auto" />
              <Card.Body className=''>
                <Card.Title>Ethiopia</Card.Title>
                <Card.Text>This is the software engineer</Card.Text>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} backdrop='true' scroll='true' position='top-right' side >
              <Modal.Header closeButton>

              </Modal.Header>
              <Modal.Title className='text-align: center'>

                <img
                  alt="cardImg"
                  className="mx-auto border rounded-circle bg-dark"
                  width="130px"
                  src={imageTwo}
                />
              </Modal.Title>
              <br />
              <Modal.Body className='text-align:center'>
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
                <Button variant='danger' onClick={handleClose} >Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
