import { useState } from "react";
import axios from "axios";
import { movieItem } from "../utils/movieItemSchema";
import API_ROOT from "../utils/constants"

function useAddMovie(userid) {
    const [movieInput, setMovieInput] = useState({
        ...movieItem,
        userid: userid,
    });

    const addMovie = () => {
        axios
            .post(`${API_ROOT}users/${userid}/movies`, movieInput)
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
