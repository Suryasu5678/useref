import React, { useRef } from "react";

const RefUsing = () => {
  const Click = useRef(0);
  const Reff = () => {
    Click.current.focus();
  };
  return (
    <div style={{ display: "flex" }}>
   
      <h1>
        <input type="text" ref={Click} placeholder="search " />
      </h1>
      <button
        style={{
          width: "60px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px ",
          marginLeft: "10px",
          backgroundColor: "lightgreen",
        }}
        onClick={Reff}
      >
        click Me
      </button>
    </div>
  );
};

export default RefUsing;
