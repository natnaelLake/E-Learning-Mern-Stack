import React from 'react'
import {Button,Form,Card} from 'react-bootstrap'
import imageOne from '../../../Assets/student.png'


function UpdateDocInd() {
  return (
    <div className="d-flex align-items-cUpdate justify-content-center Update firstDiv">
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
          <Form.Group>
              <Form.Label>Change Course Document</Form.Label>
              <Form.Control
                type="file"
                id="quiz"
                placeholder="Enter Quiz Result"
                controlId="validationCustom03"
              />
          </Form.Group>
          <br />
        </Form>
        <Button
            variant="danger"
            type="submit"
            className="text-uppercase "
          >
            Change
          </Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default UpdateDocInd