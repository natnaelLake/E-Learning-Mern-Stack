import { React, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

function Update() {
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
    <div className="d-flex align-items-cUpdate justify-content-cUpdate firstDiv">
      <Card
        bg="white"
        className="text-cUpdate  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
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
                  controlId="validationCustom03"
                />
                <label htmlFor="student">Update Course Title</label>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="session"
                  placeholder="Session Name"
                  controlId="validationCustom03"
                />
                <label htmlFor="student">Update Session Title</label>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                type="file"
                id="quiz"
                placeholder="Update Quiz Result"
                controlId="validationCustom03"
                multiple
                disabled
              />
              <br />
              <Button
                variant="danger"
                href="/vidEdit"
                className="text-uppercase "
              >
                Update Videos
              </Button>
            </Form.Group>

            <br />
            <Form.Group>
              <Form.Control
                type="file"
                id="quiz"
                placeholder="Update Quiz Result"
                controlId="validationCustom03"
                multiple
                disabled
              />
              <br />
              <Button variant="danger" href = '/docEdit' className="text-uppercase ">
                Update Documents
              </Button>
            </Form.Group>

            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  as="textarea"
                  rows={4}
                  id="session"
                  placeholder="Session Name"
                  controlId="validationCustom03"
                  disabled
                />
                <label htmlFor="student">Update Introduction</label>
              </Form.Floating>
              <br />
              <Button variant="primary" href ='/introEdit' className="text-uppercase ">
                Update Introduction
              </Button>
            </Form.Group>

            <br />
            <Button variant="danger" type="submit" className="text-uppercase ">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Update;
