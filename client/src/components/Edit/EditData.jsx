import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link,useNavigate,useParams } from "react-router-dom";
import { useState } from "react";

const EditData = () => {
  const params = useParams();
  const [task, setTask] = useState("");
  const [des, setDes] = useState("");
  const [status, setStatus] = useState("pending");
  const id = params._id
  console.log(id);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios
      .patch(`http://localhost:8000/edit/${id}`, {
        _id:params._id,
        task: task,
        description: des,
        progress: status,
      })
      .then(() => console.log("success"))
      .catch((error) => console.log(error))
    navigate('/')
  };

  return (
    <Container className="spacing px-lg-3 py-lg-3 bg-light rounded border">
      <Form className="mt-auto mx-5 py-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="2" placeholder="Enter Task Description" onChange={(e) => setDes(e.target.value)} />
        </Form.Group>

        <div key={`inline-radio`} className="mb-3" value={status} onChange={(e) => setStatus(e.target.value)}>
          <Form.Check inline label="Pending" name="group1" value="pending" type="radio" id={`inline-radio-1`} defaultChecked />
          <Form.Check inline label="Completed" value="completed" name="group1" type="radio" id={`inline-radio-2`} />
        </div>
        <div className="d-flex gap-3">
          {/* <Link to="/"> */}
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          {/* </Link> */}
          <Link to="/">
            <Button variant="danger">Back</Button>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default EditData;
