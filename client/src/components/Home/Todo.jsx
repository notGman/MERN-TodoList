import React from "react";
import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Task from "./Task";

const todo = () => {
  const [task, setTask] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:8000");
    setTask(response.data.data);
    console.log(process.env.REACT_APP_BASE_URL);
  };

  return (
    <Container className="bg-light text-dark rounded py-4 border" style={{ marginTop: "7em" }}>
      <div className="row p-3">
        <div className="col-lg-8 col-md-8 col-sm-6 col-6 text-center">
          <h1 className="ps-lg-5">TODO List</h1>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-6 col-6 my-auto mx-auto">
          <div className="text-lg-center text-center text-md-start ms-md-1">
            <Link to="/add" className="">
              <Button>
                Add new task
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-3">{task && task.map((el) => <Task key={el._id} taskName={el.task} {...el} />)}</div>
      </div>
    </Container>
  );
};

export default todo;
