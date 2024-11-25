import React, { useState } from "react";

const MultipleExpressionsTernary = ({c}) => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      {isOnline ? (
        <>
          <h1 style={{ color: "green" }}>You are online</h1>
          <button
            onClick={(c) => setIsOnline(false)}
            style={{
              margin: "20px 15px 14px 20px",
              padding: "10px 30px 20px 50px",
              backgroundColor: "red",
            }}
          >
            Go Offline
          </button>
        </>
      ) : (
        <>
          <h1 style={{ color: "red" }}>You are offline</h1>
          <button
            onClick={(c) => setIsOnline(true)}
            style={{
              margin: "20px 15px 14px 20px",
              padding: "10px 30px 20px 50px",
              backgroundColor: "green",
            }}
          >
            Go Online
          </button>
        </>
      )}
    </div>
  );
};

export default MultipleExpressionsTernary;
