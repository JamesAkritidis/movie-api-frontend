import { useState, useEffect } from "react";
import axios from "axios";
import API_ROOT from "../utils/constants"

function useMoviesFetch(userid) {
    const [movies, setMovies] = useState([]);
    const [fetch, setFetch] = useState(true);

    // get all movies for one user
    useEffect(() => {
        if (fetch) {
            axios
                .get(`https://movie-picker-backend.herokuapp.com/users/${userid}/movies`)
                .then((response) => {
                    setMovies(response.data);
                    setFetch(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [userid, fetch]);

    return [movies, setFetch];
}

export default useMoviesFetch;
