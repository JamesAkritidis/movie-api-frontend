import { useState, useEffect } from "react";
import axios from "axios";

function useMoviesFetch(userid) {
    const [movies, setMovies] = useState([]);
    const [fetch, setFetch] = useState(true);

    // get all movies for one user
    useEffect(() => {
        if (fetch) {
            axios
                .get(`http://localhost:5000/users/${userid}/movies`)
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
