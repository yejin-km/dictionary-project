import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {/* loop through all definitions */}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
            </p>
            <p>
              <Examples example={definition.example} />
            </p>
            <p>
              <Synonyms synonyms={definition.synonyms} />
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
