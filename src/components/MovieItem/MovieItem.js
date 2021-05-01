import React from "react";

function MovieItem({ movie }) {
    return (
        <div className="MovieItem">
            <div>Title: {movie.title}</div>
            <div>Director: {movie.director}</div>
            <div>Screenwriter: {movie.screenwriter}</div>
            <div>Cast: {movie.moviecast}</div>
            <div>Runtime: {movie.runtime}min</div>
            <div>Release Date: {movie.year}</div>
            <div>imdb Rating: {movie.rating}</div>
        </div>
    );
}

export default MovieItem;
