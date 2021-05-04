import React, { useState } from "react";
import NewMovieInput from "./NewMovieInput";
import NewMovieSearch from "./NewMovieSearch";
import useTmdbApi from "../../hooks/useTmdbApi";
import "./InputModal.css";

function InputModal({ toggleInputModal }) {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieData, searchResults, selectMovie] = useTmdbApi(movieSearch);

  const closeModal = () => {
    toggleInputModal(false);
  };

  return (
    <div className="back-image">
      <div className="InputModal">
        <button className="InputModal__btn--close" onClick={closeModal}>
          Close
        </button>
        <div className="InputModal__search">
          <NewMovieSearch
            setMovieSearch={setMovieSearch}
            searchResults={searchResults}
            selectMovie={selectMovie}
            movieSearch={movieSearch}
          />
        </div>
        <div className="InputModal__input">
          <NewMovieInput movieData={movieData} />
        </div>
      </div>
    </div>
  );
}

export default InputModal;
