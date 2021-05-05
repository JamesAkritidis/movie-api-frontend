import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddMovie from "../../hooks/useAddMovie";
import "./MovieDetails.css";
import { SiImdb } from "react-icons/si";

function MovieDetails({ toggleMovieDetails, movieData }) {
    const { userid } = useParams();

    const [movieInput, addMovie, setMovieInput] = useAddMovie(userid);

    const closeModal = () => {
        toggleMovieDetails(false);
    };

    useEffect(() => {
        if (movieData) {
            setMovieInput({ ...movieData });
        }
    }, [movieData]);

    return (
        <div className="MovieDetails">
            <button className="InputModal__btn--close" onClick={closeModal}>
                Close
            </button>
            {movieData.title ? (
                <>
                    <div className="movie-attributes--title">
                        {movieData.title} ({movieData.year})
                    </div>
                    <div className="movie-attributes__poster-info">
                        <img
                            src={movieData.poster}
                            className="movie-attributes--poster"
                        />
                        <div className="movie-attributes__info">
                            <div className="movie-attributes--imdb-and-watched">
                                <div className="movie-attributes movie-attributes--watched">
                                    <label
                                        htmlFor="watched"
                                        className="watched__label"
                                    >
                                        I have watched this
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="watched"
                                        value={movieData.watched}
                                    />
                                </div>
                            </div>
                            <div className="movie-attributes">
                                <div className="movie-attributes__category">
                                    Runtime
                                </div>
                                {movieData.runtime} min
                            </div>
                            {movieData.genres ? (
                                <div className="movie-attributes">
                                    <div className="movie-attributes__category">
                                        Genre
                                    </div>
                                    {movieData.genres}
                                </div>
                            ) : (
                                ""
                            )}
                            {movieData.director.length ? (
                                <div className="movie-attributes">
                                    <div className="movie-attributes__category">
                                        Director
                                    </div>
                                    {movieData.director}
                                </div>
                            ) : (
                                ""
                            )}
                            {movieData.screenwriter.length ? (
                                <div className="movie-attributes">
                                    <div className="movie-attributes__category">
                                        Screenwriter
                                    </div>
                                    {movieData.screenwriter}
                                </div>
                            ) : (
                                ""
                            )}
                            {movieData.moviecast ? (
                                <div className="movie-attributes">
                                    <div className="movie-attributes__category">
                                        Cast
                                    </div>
                                    {movieData.moviecast}
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="imdb-icon">
                                <a href={movieData.imdblink}>
                                    <SiImdb />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="movie-overview">{movieData.overview}</div>
                    <input
                        className="NewMovieInput__btn--add"
                        type="submit"
                        value="Submit the movie"
                        onClick={addMovie}
                    />
                </>
            ) : (
                ""
            )}
        </div>
    );
}

export default MovieDetails;
