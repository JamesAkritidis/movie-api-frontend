import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useMoviesFetch from "../../hooks/useMoviesFetch";
import MovieItem from "../MovieItem/MovieItem";
import InputModal from "../InputModal/InputModal";
import "./Main.css";

function Main() {
    const { userid } = useParams();
    const movies = useMoviesFetch(userid);
    const [showInputModal, toggleInputModal] = useState(false);

    return (
        <div className="Main">
            <div className="Main__inputModal">
                {showInputModal ? <InputModal /> : ""}
            </div>
            <button
                className="Main__button--newmovie"
                onClick={() => toggleInputModal(!showInputModal)}
            >
                Add New Movie
            </button>
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
