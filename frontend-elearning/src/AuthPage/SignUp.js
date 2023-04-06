import { React } from "react";
import { Form, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import {useSignUp} from '../hooks/useSignUp'





function SignUp() {
  const [validated, setValidated] = useState(false);
  const [studentname,setStudentname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [age,setAge] = useState('')
  const [department,setDepartment] = useState('')
  const [phone,setPhone] = useState('')
  const {nameError,emailError,passError,depError,phoneError,signUp} = useSignUp()
  


  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    await signUp(email,password,studentname,age,department,phone)
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
                  type="text"
                  id="firtName"
                  placeholder="User Name"
                  value={studentname}
                  onChange = {e=>{setStudentname(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="firtName">Student Name</label>
                <Form.Control.Feedback type="invalid">
                  {nameError}
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            {/* <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={lastname}
                  onChange = {e=>{setLastname(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="lastName">Last Name</label>
                <Form.Control.Feedback type="invalid">
                  {lnameError}
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group> */}
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="User Name"
                  value={email}
                  onChange = {e=>{setEmail(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="email">Enter Email</label>
                <p className="text-danger">{emailError  == 'Email is in use' && emailError}</p>
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="password"
                  id="email"
                  placeholder="Password"
                  value={password}
                  onChange = {e=>{setPassword(e.target.value)}}
                  controlid="validationCustom03"
                  required
                />
                <label htmlFor="email">Password</label>
                <p className="text-danger">{passError == 'Minimum Length is 8 Characters' && passError}</p>
                <Form.Control.Feedback type="invalid" className="text-danger">
                 {passError}
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="number"
                  id="age"
                  placeholder="Age"
                  value={age}
                  onChange = {e=>{setAge(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="age">Age</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="text"
                  id="department"
                  placeholder="Text"
                  value = {department}
                  onChange = {e=>{setDepartment(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="department">Department</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  {depError}
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  required
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange = {e=>{setPhone(e.target.value)}}
                  controlid="validationCuston03"
                />
                <label htmlFor="phone">Phone Number</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  {phoneError}
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
