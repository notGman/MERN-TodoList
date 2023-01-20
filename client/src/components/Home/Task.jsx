import React, { useState } from "react";
import { Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Task.css";

const Task = ({ taskName, description, progress,_id }) => {
  const [showDes, setShowDes] = useState(false);
  const [del, setDel] = useState(true);
  const [patch,setPatch] = useState(`/edit/${_id}`)

  const deleteData = async () => {
    await axios
      .delete("http://localhost:8000/delete", { data: { task: taskName } })
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
    setDel(!del);
  };

  return (
    <>
      {del && (
        <Container className="mt-3 bg-light text-dark rounded border ">
          <div className="row">
            <div className="col-lg-8 col-md-9 col-sm-8 col-6 p-2 dropview" onClick={() => setShowDes(!showDes)}>
              {progress=='completed'?<h5 className="my-auto text-success py-1 ps-lg-5">
                {taskName}
                {/* <Badge bg="secondary" text="light" className="ms-2">{progress}</Badge> */}
              </h5>:<h5 className="my-auto text-danger py-1 ps-lg-5">
              {taskName}
              {/* <Badge bg="secondary" text="light" className="ms-2">{progress}</Badge> */}
            </h5>}
            </div>
            <div className="col-lg-4 col-md-3 col-sm-4 col-6 mt-2 ms-sm-auto">
              <div className="text-end ms-lg-4 mb-1 text-md-end text-lg-center text-sm-start">
                <Link to={patch}><Button className="bg-success me-lg-2 me-sm-1 me-2 border-0">Edit</Button></Link>
                <Button className="bg-danger me-lg-2 me-sm-1 me-2 border-0" onClick={deleteData}>
                  Delete
                </Button>
              </div>
            </div>
            <div>
              {showDes && (
                <div className="">
                  <hr className="mb-lg-auto" />
                  <p className="mx-lg-5 p-lg-1 desfont">{description}</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Task;
