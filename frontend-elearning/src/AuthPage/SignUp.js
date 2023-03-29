import { React } from "react";
import { Form, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function SignUp() {
  const [validated, setValidated] = useState(false);
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [age,setAge] = useState('')
  const [department,setDepartment] = useState('')
  const [phone,setPhone] = useState('')
  const [message,setMessage] = useState('')


  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    setValidated(true);
    let data = {firstname, lastname, email, password, age, phone, department} 
    const response = await fetch('http://localhost:8000/signup',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{'Content-Type':'application/json'}
    })
    // console.log(response)
    let jsonRes = await response.json();
    setMessage(jsonRes.message)
  };
  const style = { color: "white", width: "200px", height: "50px" };
  const style1 = { width: "200px", height: "50px" };
  console.log(message);


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
                  value={firstname}
                  onChange = {e=>{setFirstname(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="firtName">First Name</label>
                <Form.Control.Feedback type="invalid">
                  Enter First Name
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
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
                  value={email}
                  onChange = {e=>{setEmail(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="email">Enter Email</label>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Email
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
                  id="age"
                  placeholder="Age"
                  value={age}
                  onChange = {e=>{setAge(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="age">Age</label>
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
                  id="department"
                  placeholder="Text"
                  value = {department}
                  onChange = {e=>{setDepartment(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="department">Department</label>
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
                  id="phone"
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange = {e=>{setPhone(e.target.value)}}
                  controlid="validationCuston03"
                />
                <label htmlFor="phone">Phone Number</label>
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
