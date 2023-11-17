import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [inputValue, setInputValue] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${inputValue}.....`);
  }

  function handleInputValueChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleInputValueChange} />
      </form>
    </div>
  );
}
