import React from "react";
import { useParams } from "react-router-dom";
import useMoviesFetch from "../../hooks/useMoviesFetch";
import MovieItem from "../MovieItem/MovieItem";
import NewMovieInput from "../NewMovieInput/NewMovieInput";
import "./Main.css";

function Main() {
    const { userid } = useParams();
    const movies = useMoviesFetch(userid);

    return (
        <div className="Main">
            <NewMovieInput />
            <div className="Main__movielist">
                {movies.length &&
                    movies.map((movie) => <MovieItem movie={movie} />)}
            </div>
        </div>
    );
}

export default Main;
