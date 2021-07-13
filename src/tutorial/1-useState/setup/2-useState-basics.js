import React, { useState } from "react";
//when using hooks, the components needs to start with an upper case

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const handlesClick = () => {
    text === "Random Title" ? setText("Hello World") : setText("Random Title");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handlesClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
