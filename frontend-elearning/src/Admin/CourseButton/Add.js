import { React, useState } from "react";
import { Form, Card,Button } from "react-bootstrap";

function Add() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    
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
                  controlId="validationCustom03"
                />
                <label htmlFor="student">Enter Course Title</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Course Title
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="session"
                  placeholder="Session Name"
                  required
                  controlId="validationCustom03"
                />
                <label htmlFor="student">Enter Session Title</label>
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
                  controlId="validationCustom03"
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
                  controlId="validationCustom03"
                  multiple
                />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  as = "textarea"
                  rows = {4}
                  id="session"
                  placeholder="Session Name"
                  controlId="validationCustom03"
                />
                <label htmlFor="student">Enter Introduction</label>
              </Form.Floating>
            </Form.Group>
            <br />
            <Button
              variant="danger"
              type="submit"
              className="text-uppercase "
            >
              Add
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Add;