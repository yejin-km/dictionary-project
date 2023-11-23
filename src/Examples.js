import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Example">
        <strong>Example: </strong>
        <span>{props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}
