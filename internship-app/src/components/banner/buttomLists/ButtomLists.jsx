import React from "react";

function ButtomLists(props) {
  return (
    <ul>
      {props.listValues.map((item, index) => (
        // <ButtomLists />
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ButtomLists;
