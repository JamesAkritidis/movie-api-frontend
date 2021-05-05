import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useMoviesFetch from "../../hooks/useMoviesFetch";
import MovieItem from "../MovieItem/MovieItem";
import MovieDetails from "../InputModal/MovieDetails";
import NewMovieSearch from "../InputModal/NewMovieSearch";
import useTmdbApi from "../../hooks/useTmdbApi";

import "./Main.css";

function Main() {
    const { userid } = useParams();
    const movies = useMoviesFetch(userid);
    const [showMovieDetails, toggleMovieDetails] = useState(false);

    const [movieSearch, setMovieSearch] = useState("");
    const [movieData, searchResults, selectMovie] = useTmdbApi(movieSearch);
    const [watchlistMovie, setWatchlistMovie] = useState(false);
    const [watchlistMovieData, setWatchlistMovieData] = useState({});

    return (
        <div className="Main">
            {showMovieDetails ? (
                <div className="Main__inputModal">
                    <MovieDetails
                        movieData={
                            watchlistMovie ? watchlistMovieData : movieData
                        }
                        toggleMovieDetails={toggleMovieDetails}
                    />
                </div>
            ) : (
                ""
            )}
            <NewMovieSearch
                setMovieSearch={setMovieSearch}
                searchResults={searchResults}
                selectMovie={selectMovie}
                movieSearch={movieSearch}
                toggleMovieDetails={toggleMovieDetails}
                setWatchlistMovie={setWatchlistMovie}
            />
            <div className="Main__movielist">
                {movies.length &&
                    movies.map((movie, index) => (
                        <MovieItem
                            key={index}
                            movie={movie}
                            setWatchlistMovie={setWatchlistMovie}
                            setWatchlistMovieData={setWatchlistMovieData}
                            toggleMovieDetails={toggleMovieDetails}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Main;
