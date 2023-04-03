import {React,useState} from 'react'
import {Form,Card,Button,Modal} from 'react-bootstrap'
import { useStudents } from '../adminHooks/useStudents'



function Delete() {
  const [show ,setShow] = useState(false)
  const {deleteStudent} = useStudents();
  const handleModal = ()=>{
      setShow(true)
  }
  const handleClose = ()=> setShow(false)
  const handleSubmit = async (e)=>{
    e.preventDefault();
    await deleteStudent();
  }

  return (
    <div className="d-flex align-items-cUpdate justify-content-cUpdate firstDiv">
      <Card
        bg="white"
        className="text-cUpdate  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
        style={{ width: "400px" }}
      >
        {/* <hr /> */}
        <Card.Body>
          <Form  onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Floating>
                <Form.Control
                  type="text"
                  id="student"
                  placeholder="Student Name"
                  required
                  controlId="validationCustom03"
                  disabled
                />
                <label htmlFor="student">Course Name</label>
              </Form.Floating>
            </Form.Group>
            <br />
            
          </Form>
          <Button
              variant="danger"
              type="submit"
              className="text-uppercase "
              onClick = {handleModal}
            >
              Delete
            </Button>
          <Modal show = {show} onHide = {handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                Do you want to delete this Course?
            </Modal.Body>
            <Modal.Footer>
                <Button variant = 'danger' onClick={handleSubmit}>Yes</Button>
                <Button variant = 'primary' onClick={handleClose }>No</Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Delete