import {React,useState} from "react";
import { Form, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import "./style.css";


function Login() {
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
        className="text-center  border-0 shadow-5 rounded-5 mx-auto pt-5"
        style={{ height: "500px", width: "400px" }}
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
            <div className="mb-3 text-light">
              <Form.Check
                inline
                label="Remember Me?"
                type="checkbox"
                id={"inline-radio-1"}
              />
            </div>
            <hr className="text-white" />
            <Card.Text className="text-center text-white">
              Create Account ?<Link to="/signup">Register </Link>
            </Card.Text>
            <br />
            <Button
              variant="success"
              type="submit"
              style={style1}
              className="text-uppercase"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
