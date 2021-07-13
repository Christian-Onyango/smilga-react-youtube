import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random text",
  });
  const changeMsg = () => {
    setPerson({ ...person, message: "change text" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMsg}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
