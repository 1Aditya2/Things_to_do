import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { updateAll, deleteTodo } from "./Slice/slice";
import "./all.css";

function Todo(props) {
  const dispatch = useDispatch();

  const inputval = useRef(null);
  let [Task, setTask] = useState(null);

  function clearTodo() {
    dispatch(deleteTodo(null));
  }
  function getTask(e) {
    if (e.target.value == "") {
      setTask(null);
    }
    if (e.target.value != "") {
      // console.log(e.target.value);
      setTask(e.target.value);
    }
  }

  function taskAdd() {
    // console.log(Task);
    if (Task != null) {
      dispatch(updateAll(Task));
      setTask(null);
      inputval.current.value = "";
    }
  }

  return (
    <div className="cont">
      <div className="items">
        <h1 style={{ textAlign: "center" }}>THINGS TO DO</h1>
        <input
          type="text"
          placeholder=" add task here..."
          onChange={getTask}
          ref={inputval}
        />

        <div className="Tasks">
          <Outlet />
        </div>

        <footer>
          <div id="add">
            <Link to="/" className="link">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffb846",
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                }}
                onClick={taskAdd}
              >
                <i
                  style={{ cursor: "pointer", color: "white" }}
                  className="fa-solid fa-plus"
                ></i>
              </div>
            </Link>
            |<p>{props.items} items</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="type"
          >
            <p onClick={clearTodo}>Clear</p>
          </div>

          <div id="type">
            <Link to="/" className="link">
              <p style={{ color: "#ffb846" }}>All</p>
            </Link>
            <Link to="Active" className="link">
              <p style={{ color: "#ffb846" }}>Active</p>
            </Link>
            <Link to="Completed" className="link">
              <p style={{ color: "#ffb846" }}>Completed</p>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Todo;
