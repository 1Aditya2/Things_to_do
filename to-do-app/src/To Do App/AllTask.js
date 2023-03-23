import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "./Slice/slice";
function AllTask(props) {
  const all = useSelector((state) => state.todoReducer.all);

  props.setitem(all.length);

  const dispatch = useDispatch();

  function changeStatus(e) {
    dispatch(
      updateStatus(e.target.parentElement.nextElementSibling.textContent)
    );
  }
  return (
    <>
      {all.map((each) => {
        if (each.status == true) {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                  height: "20%",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    style={{ width: "25px", color: "#ffb846" }}
                    onClick={changeStatus}
                    defaultChecked={true}
                  />
                </div>
                <p style={{ display: "none" }}>{each.id}</p>
                <p
                  style={{
                    fontSize: "25px",
                    color: "#ffb846",
                    cursor: "pointer",
                  }}
                >
                  {each.task}
                </p>
              </div>
              <hr />
            </>
          );
        } else {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                  height: "20%",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    style={{
                      width: "25px",
                      color: "#ffb846",
                      cursor: "pointer",
                    }}
                    onClick={changeStatus}
                  />
                </div>
                <p style={{ display: "none" }}>{each.id}</p>
                <p style={{ fontSize: "25px", color: "#ffb846" }}>
                  {each.task}
                </p>
              </div>
              <hr />
            </>
          );
        }
      })}
    </>
  );
}

export default AllTask;
