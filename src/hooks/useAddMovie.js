import { useState } from "react";
import axios from "axios";

function useAddMovie(userid) {
    const movieAttributes = [
        {
            name: "title",
            type: "text",
        },
        {
            name: "director",
            type: "text",
        },
        {
            name: "screenwriter",
            type: "text",
        },
        {
            name: "cast",
            type: "text",
        },
        {
            name: "runtime",
            type: "number",
        },
        {
            name: "year",
            type: "number",
        },
        {
            name: "rating",
            type: "number",
        },
    ];

    const [movieInput, setMovieInput] = useState({
        title: "",
        director: "",
        screenwriter: "",
        moviecast: "",
        runtime: "",
        year: "",
        rating: "",
        userid: userid,
    });

    const addMovie = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/users/${userid}/movies`, movieInput)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return [movieAttributes, movieInput, addMovie, setMovieInput];
}

export default useAddMovie;
