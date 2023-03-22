import {React,useState} from 'react'
import {Button,Form,Card,Modal} from 'react-bootstrap'
import imageOne from '../../../Assets/student.png'


function DeleteVideo() {
    const [show ,setShow] = useState(false)
    const handleModal = ()=>{
        setShow(true)
    }
    const handleClose = ()=> setShow(false)
  return (
    <div className="d-flex align-items-cUpdate justify-content-cUpdate firstDiv">
      <Card
        bg="white"
        className="text-cUpdate  border-0 shadow-5 rounded-5 mx-auto pt-5 mb-5"
        style={{ width: "400px" }}
      >
        {/* <hr /> */}
        <div className="imageCard">
                      <Card.Img
                        variant="top"
                        src={imageOne}
                        className="rounded-5 mainCard"
                      />
                    </div>
        <Card.Body>
          <Form  >
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
                <Button variant = 'danger' onClick={handleClose}>Yes</Button>
                <Button variant = 'primary' onClick={handleClose }>No</Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DeleteVideo