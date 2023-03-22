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
                  id="student"
                  placeholder="Student Name"
                  required
                  controlId="validationCustom03"
                />
                <label htmlFor="student">Student Name</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Student Name
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="number"
                  id="quiz"
                  placeholder="Enter Quiz Result"
                  controlId="validationCustom03"
                />
                <label htmlFor="quiz">Enter Quiz Result</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Quiz.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="number"
                  id="mid"
                  placeholder="Enter Mid Result"
                  controlId="validationCustom03"
                />
                <label htmlFor="mid">Enter Mid Result</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Mid.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="number"
                  id="final"
                  placeholder="Enter Final Result"
                  controlId="validationCustom03"
                />
                <label htmlFor="final">Enter Final Result</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Final.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="number"
                  id="total"
                  placeholder="Enter Total Result"
                  controlId="validationCustom03"
                />
                <label htmlFor="total">Enter Total Result</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Total.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
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
