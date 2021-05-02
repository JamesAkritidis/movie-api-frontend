import { useState, useEffect } from "react";
import axios from "axios";
import { movieItem } from "../utils/movieItemSchema";

function useTmdbData(movieSearch, userid) {
    const [searchResults, setSearchResults] = useState("");

    const [movieData, setMovieData] = useState({
        ...movieItem,
        userid: userid,
    });

    const apiTmdb = process.env.REACT_APP_TMDB_API_TOKEN;
    const apiUrl = `https://api.themoviedb.org/3/`;
    const baseUrl = "http://image.tmdb.org/t/p/";

    useEffect(() => {
        if (movieSearch.length) {
            const parsedSearchResult = movieSearch.split(" ").join("%20");
            axios
                .get(
                    `${apiUrl}search/movie?api_key=${apiTmdb}&language=en-US&query=${parsedSearchResult}&include_adult=false&page=1`
                )
                .then((result) => {
                    setSearchResults(result.data.results);
                })
                .catch(() => console.log("request failed"));
        } else {
            setSearchResults("");
        }
    }, [movieSearch]);

    const selectMovie = (index) => {
        axios
            .get(
                `${apiUrl}movie/${searchResults[index].id}?api_key=${apiTmdb}&language=en-US`
            )
            .then((result) => {
                console.log(result.data);
                handleMovieData(result.data);
                setSearchResults("");
            })
            .catch(() => console.log("selected movie request failed"));
    };

    const handleMovieData = (data) => {
        setMovieData({
            title: data.title,
            overview: data.overview,
            director: "",
            screenwriter: "",
            moviecast: "",
            runtime: data.runtime,
            year: data.release_date.slice(0, 4),
            rating: null,
            poster: `${baseUrl}w92/${data.poster_path}`,
            platform: "",
            userid: userid,
        });
    };

    return [movieData, searchResults, selectMovie];
}

export default useTmdbData;

// ***** maybe necessary for getting configuration data but doesn't seem to be needed
// useEffect(() => {
//     axios
//         .get(`${apiUrl}configuration?api_key=${apiTmdb}`)
//         .then((result) => console.log(result.data));
// });
