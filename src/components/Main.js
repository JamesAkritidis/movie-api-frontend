import React, { useState } from "react";
import axios from "axios";
import "./Main.css";

function Main({ movies }) {
    const [movieInput, setMovieInput] = useState({
        title: "",
        director: "",
        screenwriter: "",
        moviecast: "",
        runtime: "",
        year: "",
        rating: "",
    });

    const addMovie = () => {
        axios
            .post("http://localhost:5000/movies", movieInput)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="Main">
            {/* input field --> state --> button --> post request */}

            <form className="form">
                <input
                    type="text"
                    name="title"
                    placeholder="add a title"
                    onChange={(e) =>
                        setMovieInput({ ...movieInput, title: e.target.value })
                    }
                    value={movieInput.title}
                />
                <input
                    type="text"
                    name="director"
                    placeholder="add a director"
                    onChange={(e) =>
                        setMovieInput({
                            ...movieInput,
                            director: e.target.value,
                        })
                    }
                    value={movieInput.director}
                />
                <input
                    type="text"
                    name="screenwriter"
                    placeholder="add a screenwriter"
                    onChange={(e) =>
                        setMovieInput({
                            ...movieInput,
                            screenwriter: e.target.value,
                        })
                    }
                    value={movieInput.screenwriter}
                />
                <input
                    type="text"
                    name="Cast"
                    placeholder="add the cast"
                    onChange={(e) =>
                        setMovieInput({
                            ...movieInput,
                            moviecast: e.target.value,
                        })
                    }
                    value={movieInput.moviecast}
                />
                <input
                    type="number"
                    name="year"
                    placeholder="add a year"
                    onChange={(e) =>
                        setMovieInput({ ...movieInput, year: e.target.value })
                    }
                    value={movieInput.year}
                />
                <input
                    type="number"
                    name="runtime"
                    placeholder="add the runtime"
                    onChange={(e) =>
                        setMovieInput({
                            ...movieInput,
                            runtime: e.target.value,
                        })
                    }
                    value={movieInput.runtime}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="add the rating"
                    onChange={(e) =>
                        setMovieInput({
                            ...movieInput,
                            rating: e.target.value,
                        })
                    }
                    value={movieInput.rating}
                />
                <input
                    className="add-button"
                    type="submit"
                    value="Submit the movie"
                    onClick={addMovie}
                />
            </form>

            {movies.map((item) => (
                <>
                    <div>Title: {item.title}</div>
                    <div>Director: {item.director}</div>
                    <div>Screenwriter: {item.screenwriter}</div>
                    <div>Cast: {item.moviecast}</div>
                    <div>Runtime: {item.runtime}min</div>
                    <div>Release Date: {item.year}</div>
                    <div>imdb Rating: {item.rating}</div>
                </>
            ))}
        </div>
    );
}

export default Main;
