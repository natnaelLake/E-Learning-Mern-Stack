import {React,useState} from 'react'
import {Button,Form,Card} from 'react-bootstrap'
import { useStudents } from '../adminHooks/useStudents';




function Update() {
    const [validated, setValidated] = useState(false);
    const [upstudentname,setUpstudentname] = useState()
    const [updateQuiz,setUpdateQuiz] = useState()
    const [upMid,setUpMid] = useState()
    const [upFinal,setUpFinal] = useState()
    const [upTotal,setUpTotal] = useState()
    const {updateStudent} = useStudents()


  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
      event.preventDefault();
      await updateStudent(upstudentname,updateQuiz,upMid,upFinal,upTotal);
  };
  return (
    <div>
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
                  id="student"
                  placeholder="Student Name"
                  value = {upstudentname}
                  onChange = {(e)=>{setUpstudentname(e.target.value)}}
                  required
                  controlid="validationCustom03"
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
                  placeholder="Update Quiz Result"
                  value = {updateQuiz}
                  onChange = {(e)=>{setUpdateQuiz(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="quiz">Update Quiz Result</label>
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
                  placeholder="Update Mid Result"
                  value = {upMid}
                  onChange = {(e)=>{setUpMid(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="mid">Update Mid Result</label>
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
                  placeholder="Update Final Result"
                  value = {upFinal}
                  onChange = {(e)=>{setUpFinal(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="final">Update Final Result</label>
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
                  placeholder="Update Total Result"
                  value = {upTotal}
                  onChange = {(e)=>{setUpTotal(e.target.value)}}
                  controlid="validationCustom03"
                />
                <label htmlFor="total">Update Total Result</label>
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
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </div>
  )
}

export default Update