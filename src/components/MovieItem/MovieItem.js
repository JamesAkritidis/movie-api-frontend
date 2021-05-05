import React from "react";
import "./MovieItem.css";
import { VscTrash } from "react-icons/vsc";
import axios from "axios";

function MovieItem({
    movie,
    toggleMovieDetails,
    setWatchlistMovie,
    setWatchlistMovieData,
}) {
    const deleteMovie = (e) => {
        e.preventDefault();
        axios
            .delete(
                `http://localhost:5000/users/${movie.userid}/movies/${movie.movieid}`
            )

            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const showMovie = () => {
        setWatchlistMovieData(movie);
        setWatchlistMovie(true);
        toggleMovieDetails(true);
    };

    return (
        <div className="MovieItem" onClick={showMovie}>
            <div>
                <div className="delete-movie">
                    {" "}
                    <VscTrash className="delete-icon" onClick={deleteMovie} />
                </div>
            </div>
            <img
                src={movie.poster}
                alt={`Poster ${movie.title}`}
                className="MovieItem__poster"
            />
            <div className="MovieItem__info">
                <div className="MovieItem__title">{movie.title}</div>
                {/* <div>Genres: {movie.genres}</div>
                <div>Director: {movie.director}</div>
                <div>Screenwriter: {movie.screenwriter}</div>
                <div>Cast: {movie.moviecast}</div>
                <div>Runtime: {movie.runtime}min</div>
                <div>imdb Link: {movie.imdblink}</div> */}
            </div>
        </div>
    );
}

export default MovieItem;
