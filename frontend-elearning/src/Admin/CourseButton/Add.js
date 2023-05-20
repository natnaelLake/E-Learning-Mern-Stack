import { React, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useFiles } from "../adminHooks/useFiles";



function Add() {
  const [validated, setValidated] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");
  const [coverImage, setCoverImage] = useState();
  const [moduleTitle, setModuleTitle] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoArray, setVideoArray] = useState([]);
  const [fileTitle, setFileTitle] = useState("");
  const [fileArray, setFileArray] = useState([]);
  const [descTitle, setDescTitle] = useState("");
  const [desc, setDesc] = useState("");
  const {addCourse} = useFiles();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("courseTitle", courseTitle);
    formData.append("coverImage", coverImage);

    for (let i = 0; i < videoArray.length; i++) {
      formData.append("videoArray", videoArray[i]);
    }
    for (let i = 0; i < fileArray.length; i++) {
      formData.append("fileArray", fileArray[i]);
    }
    formData.append("descTitle", descTitle);
    formData.append("desc", desc);
    formData.append("moduleTitle", moduleTitle);
    formData.append("videoTitle", videoTitle);
    formData.append("fileTitle", fileTitle);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    await addCourse(formData)
  };

  return (
    <div className="d-flex align-items-center justify-content-center firstDiv">
      <Card
        bg="white"
        className="text-center  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
        style={{ width: "400px" }}
      >
        {/* <hr /> */}
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="course"
                  placeholder="Course Name"
                  required
                  onChange={(e) => {
                    setCourseTitle(e.target.value);
                  }}
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Course Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Course Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Select Cover Image</Form.Label>
              <Form.Control
                type="file"
                id="quiz"
                placeholder="Enter Quiz Result"
                accept = 'image/*'
                onChange={(e) => setCoverImage(e.target.files[0])}
                controlid="validationCustom03"
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="session"
                  placeholder="Session Name"
                  onChange={(e) => {
                    setModuleTitle(e.target.value);
                  }}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Module Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Session Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Select Multiple Course Videos</Form.Label>
              <Form.Control
                type="file"
                id="quiz"
                placeholder="Enter Quiz Result"
                accept = 'video/*'
                controlid="validationCustom03"
                onChange={(e) => {
                  setVideoArray(e.target.files);
                }}
                multiple
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Select Multiple Course Documents</Form.Label>
              <Form.Control
                type="file"
                id="quiz"
                placeholder="Enter Quiz Result"
                accept = '.pdf, .txt ,.doc ,.docx'
                onChange={(e) => {
                  setFileArray(e.target.files);
                }}
                controlid="validationCustom03"
                multiple
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="course"
                  placeholder="Course Name"
                  // required
                  onChange={(e) => {
                    setDescTitle(e.target.value);
                  }}
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Description Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Description Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  as="textarea"
                  rows={4}
                  id="session"
                  placeholder="Session Name"
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Introduction</label>
              </Form.Floating>
            </Form.Group>
            <br />
            <Button variant="danger" type="submit" className="text-uppercase ">
              Add
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Add;
