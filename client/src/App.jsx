import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./components/Home/Todo";
import NewData from "./components/Add/NewData";
import EditData from './components/Edit/EditData';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/add" element={<NewData />} />
        <Route path="/edit/:_id" element={<EditData/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
