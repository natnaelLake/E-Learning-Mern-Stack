import { React, useState } from "react";
import { Form, Card,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../adminHooks/useStudents";


 function Add() {
  const [validated, setValidated] = useState(false);
  const [studentname,setStudentname]  = useState('');
  const [email,setEmail]  = useState('');
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')
  const [age,setAge] = useState('')
  const [department,setDepartment] = useState('')
  const [quiz,setQuiz] = useState(0)
  const [mid,setMid] = useState(0)
  const [final,setFinal] = useState(0)
  const navigate = useNavigate();
  // const [total,setTotal] = useState(null)
  const {addStudents,nameError,emailError,passwordError,phoneError,quizError,deptError,midError,finalError} = useStudents();

  console.log(nameError)

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();
    if(!(nameError === '' && emailError=== '' && passwordError === ''&& phoneError === ''&& quizError === ''&& deptError === '' && midError === '' && finalError === '')){
      event.preventDefault();
      event.stopPropagation();
    }
    if(nameError === '' && emailError=== '' && passwordError === ''&& phoneError === ''&& quizError === ''&& deptError === '' && midError === '' && finalError === ''){
      navigate(-1)
    }
    await addStudents(studentname,email,password,age,department,phone,quiz,mid,final)

    
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
                  value = {studentname}
                  onChange={(e)=>{setStudentname(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Student Name</label>
                <Form.Control.Feedback type="invalid">
                  {nameError}
                </Form.Control.Feedback>
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="email"
                  id="student"
                  placeholder="Enter Email"
                  value = {email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Email</label>
                <p className="text-danger">{emailError  && emailError}</p>
                {/* <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback> */}
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="password"
                  id="student"
                  placeholder="Enter Password"
                  value = {password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Password</label>
                <p className="text-danger">{passwordError && passwordError}</p>
                {/* <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback> */}
              </Form.Floating>
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="student"
                  placeholder="Enter Department"
                  value = {department}
                  onChange={(e)=>{setDepartment(e.target.value)}}
                  required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Department</label>
                <Form.Control.Feedback type="invalid">
                  {deptError}
                </Form.Control.Feedback>
              </Form.Floating>
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
                <label htmlFor="phone">Enter Phone Number</label>
                <Form.Control.Feedback type="invalid" className="text-danger">
                  {phoneError}
                  
                </Form.Control.Feedback>
              </Form.Floating>{" "}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="number"
                  id="student"
                  placeholder="Student Name"
                  value = {age}
                  onChange={(e)=>{setAge(e.target.value)}}
                  // required
                  controlid="validationCustom03"
                />
                <label htmlFor="student">Enter Age</label>
                <Form.Control.Feedback type="invalid">
                  Please provide Age
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
                  value = {quiz}
                  onChange={(e)=>{setQuiz(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="quiz">Enter Quiz Result</label>
                <p className="text-danger">{quizError  && quizError}</p>
                {/* <Form.Control.Feedback type="invalid" className="text-danger">
                  {quizError}
                </Form.Control.Feedback> */}
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
                  value = {mid}
                  onChange={(e)=>{setMid(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="mid">Enter Mid Result</label>
                <p className="text-danger ">{midError && midError}</p>
                {/* <Form.Control.Feedback type="invalid" className="text-danger">
                  {midError}
                </Form.Control.Feedback> */}
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
                  value = {final}
                  onChange={(e)=>{setFinal(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="final">Enter Final Result</label>
                <p className="text-danger">{finalError  && finalError}</p>
                {/* <Form.Control.Feedback type="invalid" className="text-danger">
                  {finalError}
                </Form.Control.Feedback> */}
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
