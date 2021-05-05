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

    const selectMovie = async (index) => {
        try {
            const basicData = await axios.get(
                `${apiUrl}movie/${searchResults[index].id}?api_key=${apiTmdb}&language=en-US`
            );
            const creditsData = await axios.get(
                `${apiUrl}movie/${searchResults[index].id}/credits?api_key=${apiTmdb}&language=en-US`
            );

            handleMovieData(basicData.data, creditsData.data);
            console.log(creditsData.data);

            setSearchResults("");
        } catch {
            console.log("selected movie request failed");
        }
    };

    const handleMovieData = (basicData, creditsData) => {
        const directors = creditsData.crew.filter(
            (crew) => crew.job === "Director"
        );
        const screenwriters = creditsData.crew.filter(
            (crew) =>
                crew.job === "Screenplay" ||
                crew.job === "Script" ||
                crew.job === "Writer"
        );
        const cast = creditsData.cast.slice(0, 3);
        console.log(screenwriters);
        console.log(cast);
        console.log(directors);
        setMovieData({
            title: basicData.title,
            year: basicData.release_date.slice(0, 4),
            runtime: basicData.runtime,
            genres: basicData.genres.map((genre) => genre.name).join(", "),
            overview: basicData.overview,
            director: directors.map((director) => director.name).join(", "),
            screenwriter: screenwriters
                .map((screenwriter) => screenwriter.name)
                .join(", "),
            cast: cast.map((actor) => actor.name).join(", "),
            imdblink: `https://www.imdb.com/title/${basicData.imdb_id}`,
            poster: `${baseUrl}w500/${basicData.poster_path}`,
            watched: false,
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
