import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useMoviesFetch from "../../hooks/useMoviesFetch";
import MovieItem from "../MovieItem/MovieItem";
import InputModal from "../InputModal/InputModal";
import NewMovieSearch from "../InputModal/NewMovieSearch";
import useTmdbApi from "../../hooks/useTmdbApi";

import "./Main.css";
import "../InputModal/NewMovieInput.css";

function Main() {
    const { userid } = useParams();
    const movies = useMoviesFetch(userid);
    const [showInputModal, toggleInputModal] = useState(false);

    const [movieSearch, setMovieSearch] = useState("");
    const [movieData, searchResults, selectMovie] = useTmdbApi(movieSearch);

    return (
        <div className="Main">
            {showInputModal ? (
                <div className="Main__inputModal">
                    <InputModal toggleInputModal={toggleInputModal} />
                </div>
            ) : (
                ""
            )}
            <NewMovieSearch
                setMovieSearch={setMovieSearch}
                searchResults={searchResults}
                selectMovie={selectMovie}
                movieSearch={movieSearch}
                toggleInputModal={toggleInputModal}
            />
            <div className="Main__movielist">
                {movies.length &&
                    movies.map((movie, index) => (
                        <MovieItem key={index} movie={movie} />
                    ))}
            </div>
        </div>
    );
}

export default Main;
