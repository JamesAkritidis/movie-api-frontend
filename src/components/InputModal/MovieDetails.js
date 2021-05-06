import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddMovie from "../../hooks/useAddMovie";
import useDeleteMovie from "../../hooks/useDeleteMovie";
import "./MovieDetails.css";
import { FaImdb } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";
import { AiFillCloseCircle } from "react-icons/ai";

function MovieDetails({
    toggleMovieDetails,
    movieData,
    setFetch,
    watchlistMovie,
}) {
    const { userid } = useParams();

    const [addMovie, setMovieInput] = useAddMovie(userid);
    const deleteMovie = useDeleteMovie();

    const deleteMovieFromWatchlist = () => {
        deleteMovie(userid, movieData.movieid);
        setTimeout(() => setFetch(true), 500);
        toggleMovieDetails(false);
    };

    const addMovieToTheWatchlist = () => {
        addMovie();
        setTimeout(() => setFetch(true), 500);
        toggleMovieDetails(false);
    };

    const closeModal = () => {
        toggleMovieDetails(false);
        setFetch(true);
    };

    useEffect(() => {
        if (movieData) {
            setMovieInput({ ...movieData });
        }
    }, [movieData, setMovieInput]);

    return (
        <div className="MovieDetails">
            {movieData.title ? (
                <>
                    <div className="movie-attributes--title">
                        {movieData.title} ({movieData.year})
                    </div>
                    <div className="movie-attributes__poster-info">
                        <img
                            src={movieData.poster}
                            className="movie-attributes--poster"
                            alt={movieData.title}
                        />
                        <div className="movie-attributes__info">
                            <div className="movie-attributes--imdb-and-watched">
                                <div className="movie-attributes__imdb-icon">
                                    <a href={movieData.imdblink}>
                                        <FaImdb className="imbd-icon" />
                                    </a>
                                </div>
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
                        </div>
                    </div>
                    <div className="movie-overview">{movieData.overview}</div>
                    <div className="NewMovieInput__buttons">
                        {!watchlistMovie ? (
                            <div>
                                <div
                                    className="NewMovieInput__btn--add"
                                    onClick={(e) => addMovieToTheWatchlist(e)}
                                >
                                    Add movie
                                </div>
                                <div
                                    className="NewMovieInput__btn--add NewMovieInput__btn--dismiss"
                                    onClick={closeModal}
                                >
                                    Dissmiss Movie
                                </div>
                            </div>
                        ) : (
                            <div className="delete-movie">
                                {" "}
                                <VscTrash
                                    className="delete-icon"
                                    onClick={deleteMovieFromWatchlist}
                                />
                                <AiFillCloseCircle
                                    className="close-icon"
                                    onClick={closeModal}
                                />
                            </div>
                        )}
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
}

export default MovieDetails;
