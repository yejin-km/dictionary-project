import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <button>
          <i
            className="fa-solid fa-volume-high fa-lg"
            style={{ color: "#307bfd" }}
          ></i>
        </button>
      </a>

      {props.phonetic.text}
    </div>
  );
}
