import React from "react";
import { useSelector } from "react-redux";

function Active(props) {
  const active = useSelector((state) => state.todoReducer.active);

  props.setitem(active.length);

  return (
    <>
      {active.map((each) => {
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
                  checked={false}
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

export default Active;
