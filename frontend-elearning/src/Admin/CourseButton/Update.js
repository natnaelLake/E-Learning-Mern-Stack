import { React, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useFiles } from "../adminHooks/useFiles";

function Update() {
  const [validated, setValidated] = useState(false);
  const [courseTitle, setCourseTitle] = useState();
  const [moduleTitle, setModuleTitle] = useState();
  const [desc, setDesc] = useState();
  const [descTitle, setDescTitle] = useState();

  const { updateCourse } = useFiles();
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();
    await updateCourse(courseTitle, moduleTitle, desc, descTitle);
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
                  value={courseTitle}
                  onChanage={(e) => {
                    setCourseTitle(e.target.value);
                  }}
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
                  value={moduleTitle}
                  onChanage={(e) => {
                    setModuleTitle(e.target.value);
                  }}
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
              {/* <Button
                variant="danger"
                href="/vidEdit"
                className="text-uppercase "
              >
                Update Videos
              </Button> */}
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
              {/* <Button variant="danger" href = '/docEdit' className="text-uppercase ">
                Update Documents
              </Button> */}
            </Form.Group>

            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  as="textarea"
                  rows={4}
                  id="session"
                  placeholder="Session Name"
                  value={descTitle}
                  onChanage={(e) => {
                    setDescTitle(e.target.value);
                  }}
                  controlId="validationCustom03"
                  // disabled
                />
                <label htmlFor="student">Update Introduction</label>
              </Form.Floating>
              <br />
              {/* <Button variant="primary" href ='/introEdit' className="text-uppercase ">
                Update Introduction
              </Button> */}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  as="textarea"
                  rows={4}
                  id="session"
                  placeholder="Session Name"
                  value={desc}
                  onChanage={(e) => {
                    setDesc(e.target.value);
                  }}
                  controlId="validationCustom03"
                  // disabled
                />
                <label htmlFor="student">Update Introduction</label>
              </Form.Floating>
              <br />
              {/* <Button variant="primary" href ='/introEdit' className="text-uppercase ">
                Update Introduction
              </Button> */}
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
