import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [inputValue, setInputValue] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}
  }`;
    axios.get(apiUrl).then(handleResponse);
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
