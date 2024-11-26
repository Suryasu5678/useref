import React, { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(count);
  },[]);

  return (
    <div
      style={{
        justifyContent: "center",
        border: "3px dashed red",
        width: "auto",

      }}
    >
   
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         color:"green"
        }}
      >
        THIS IS COUNT
      </div>
      <div
        style={{
          color: "blue",
          justifyContent: "center",
          display: "flex",
          marginRight: "8px",
          
        }}
      >
       
        {count}
      </div>
    </div>
  );
};

export default Effect;
