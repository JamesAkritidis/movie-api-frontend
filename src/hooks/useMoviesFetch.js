import { useState, useEffect } from "react";
import axios from "axios";

function useMoviesFetch(userid) {
    const [movies, setMovies] = useState([]);

    // get all movies for one user
    useEffect(() => {
        axios
            .get(`http://localhost:5000/users/${userid}/movies`)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userid]);

    return movies;
}

export default useMoviesFetch;
