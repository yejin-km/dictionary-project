import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "XeCWdRJmBnbYq2j8bI7NMy9gGh1Upbk409yqJPZVCJndVD27tPiXVGNA";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let header = { Authorization: pexelsApiKey };
    axios.get(pexelsApiUrl, { headers: header }).then(handlePexelsResponse);
  }

  function handleInputValueChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h4>What word do you want to look up?</h4>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word"
          onChange={handleInputValueChange}
        />
      </form>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
