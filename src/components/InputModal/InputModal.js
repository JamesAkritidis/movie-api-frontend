import React, { useState } from "react";
import NewMovieInput from "./NewMovieInput";
import NewMovieSearch from "./NewMovieSearch";
import useTmdbApi from "../../hooks/useTmdbApi";
import "./InputModal.css";

function InputModal() {
    const [movieSearch, setMovieSearch] = useState("");
    const [movieData, searchResults, selectMovie] = useTmdbApi(movieSearch);

    return (
        <div className="InputModal">
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
    );
}

export default InputModal;
