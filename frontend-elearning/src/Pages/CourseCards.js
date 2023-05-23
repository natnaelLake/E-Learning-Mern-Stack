import React from "react";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Image,
  Offcanvas,
  Modal,
  Pagination,
} from "react-bootstrap";
import "./style.css";
import * as Icon from "react-bootstrap-icons";
import formatDateDistance from "date-fns/formatDistanceToNow";
import { useNavigate } from "react-router-dom";

function CourseCards({ courses }) {
  const navigate = useNavigate();
  const handleLearn = async (stud) => {
   stud && await navigate("/courses", { state: { course: stud } });
  };
 
  return (
    <div>
      {courses && (
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((files) => (
            <div className="col">
              <Card className="shadow mb-3 rounded-5 border-5 mt-3 card" key = {files._id}>
                <div className="imageCard">
                  <Card.Img
                    variant="top"
                    src={`https://e-learning-web-app-back-end.onrender.com//uploads/${files.coverImage}`}
                    className="rounded-5 mainCard"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{files.courseTitle}</Card.Title>
                  <Card.Text>{files.desc}</Card.Text>
                  <Button
                    variant="outline-success"
                    className=""
                    onClick={() => {
                      // await deleteStudent(student._id)
                      handleLearn(files);
                      // console.log(student._id);
                    }}
                  >
                    <Icon.Book /> Learn
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {formatDateDistance(new Date(files.createdAt), {
                      addSuffix: true,
                    })}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseCards;
