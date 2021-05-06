import React from "react";
import "./MovieItem.css";

function MovieItem({
    movie,
    toggleMovieDetails,
    setWatchlistMovie,
    setWatchlistMovieData,
}) {
    const showMovie = () => {
        setWatchlistMovieData(movie);
        setWatchlistMovie(true);
        toggleMovieDetails(true);
    };

    return (
        <div className="MovieItem" onClick={showMovie}>
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
