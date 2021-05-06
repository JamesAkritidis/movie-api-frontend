import { useState } from "react";
import axios from "axios";
import { movieItem } from "../utils/movieItemSchema";

function useAddMovie(userid) {
    const [movieInput, setMovieInput] = useState({
        ...movieItem,
        userid: userid,
    });

    const addMovie = () => {
        axios
            .post(`http://localhost:5000/users/${userid}/movies`, movieInput)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return [addMovie, setMovieInput];
}

export default useAddMovie;
