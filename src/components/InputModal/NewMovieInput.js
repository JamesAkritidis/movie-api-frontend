import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddMovie from "../../hooks/useAddMovie";
import "./NewMovieInput.css";

function NewMovieInput({ movieData }) {
    const { userid } = useParams();
    const [movieInput, addMovie, setMovieInput] = useAddMovie(userid);

    useEffect(() => {
        if (movieData) {
            setMovieInput({ ...movieData });
        }
    }, [movieData]);

    return (
        <div className="NewMovieInput">
            <input
                className="NewMovieInput__btn--add"
                type="submit"
                value="Submit the movie"
                onClick={addMovie}
            />
        </div>
    );
}

export default NewMovieInput;
