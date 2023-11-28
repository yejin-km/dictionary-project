import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    if (props.synonyms.length > 0) {
      return (
        <div className="Synonyms text-info-emphasis">
          <strong>Synonyms: </strong>
          {props.synonyms.map(function (synonym, index) {
            return <span key={index}>{synonym} </span>;
          })}
        </div>
      );
    }
  } else {
    return null;
  }
}
