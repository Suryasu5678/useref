import React, { useState, useEffect, useRef } from 'react';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();


  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div style={{display:"flex", alignContent:"flex-start", color:"blueviolet"}}>
      <h1>Current Count: {count}</h1>
      <h2 style={{paddingLeft:"10px", paddingTop:"7px"}}>Previous Count: {prevCountRef.current}</h2>
      <button style={{backgroundColor:"red", height:"40px" , padding:"10px 2px ", margin:"18px"}} onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousValue;