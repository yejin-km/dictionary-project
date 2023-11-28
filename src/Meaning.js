import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {/* loop through all definitions */}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <strong>Definition:</strong> {definition.definition}
            </div>
            <div>
              <em>
                <Examples example={definition.example} />
              </em>
            </div>
            <div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
