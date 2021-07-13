import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    return () => {
      console.log("hii");
      window.addEventListener("resize", checkSize);
    };
  });
  console.log(size);
  return (
    <>
      <h1>windows</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
