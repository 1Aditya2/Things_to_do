import React from "react";
import { useSelector } from "react-redux";

function Completed(props) {
  const completed = useSelector((state) => state.todoReducer.completed);

  props.setitem(completed.length);

  return (
    <>
      {completed.map((each) => {
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
                  style={{ width: "25px" }}
                  checked={true}
                />
              </div>
              <p
                style={{
                  fontSize: "25px",
                  color: "#ffb846",
                  cursor: "pointer",
                }}
              >
                {each}
              </p>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
}

export default Completed;
