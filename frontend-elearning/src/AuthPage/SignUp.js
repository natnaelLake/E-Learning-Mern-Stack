import { React } from "react";
import { Form, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function SignUp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const style = { color: "white", width: "200px", height: "50px" };
  const style1 = { width: "200px", height: "50px" };



  return (
    <div className="d-flex align-items-center justify-content-center firstDiv">
      <Card
        bg="dark"
        className="text-center  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
        style={{ width: "400px" }}
      >
        <Icon.PersonFill
          style={style}
          className="align-items-center mx-auto "
        />
        {/* <hr /> */}
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="User Name"
                  required
                  controlId="validationCustom03"
                />
                <label htmlFor="email">First Name</label>
                <Form.Control.Feedback type="invalid">
                  Enter First Name
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Last Name"
                  required
                  controlId="validationCustom03"
                />
                <label htmlFor="email">Last Name</label>
                <Form.Control.Feedback type="invalid">
                  Enter Last Name
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="User Name"
                  required
                  controlId="validationCustom03"
                />
                <label htmlFor="email">User Name</label>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Email
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="password"
                  id="email"
                  placeholder="Password"
                  controlId="validationCustom03"
                />
                <label htmlFor="email">Password</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Password.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="number"
                  id="email"
                  placeholder="Age"
                  controlId="validationCustom03"
                />
                <label htmlFor="email">Age</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Age.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="text"
                  id="email"
                  placeholder="Text"
                  controlId="validationCustom03"
                />
                <label htmlFor="email">Department</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="tel"
                  id="email"
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  controlId="validationCuston03"
                />
                <label htmlFor="email">Phone Number</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  Please provide a valid Phone.
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />

            <hr className="text-white" />
            <Card.Text className="text-center text-white">
              Have Account ?<Link to="/login">Login </Link>
            </Card.Text>
            <br />
            <Button
              variant="success"
              type="submit"
              className="text-uppercase text-center p-auto"
              style={style1}
            >
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
