import React, { useState } from "react";
import "./NewMovieInput.css";

function NewMovieInput({
    setMovieSearch,
    searchResults,
    selectMovie,
    movieSearch,
}) {
    const [selectedSearchResult, setSelectedSearchResult] = useState(0);

    const selectSearchResult = (e) => {
        switch (e.key) {
            case "ArrowDown":
                console.log(selectedSearchResult);
                setSelectedSearchResult((prevState) =>
                    prevState < searchResults.length - 1
                        ? prevState + 1
                        : prevState
                );
                break;
            case "ArrowUp":
                setSelectedSearchResult((prevState) =>
                    prevState ? prevState - 1 : 0
                );
                break;
            case "Enter":
                selectMovie(selectedSearchResult);
                setSelectedSearchResult(0);
                setMovieSearch("");
                break;
            default:
                break;
        }
    };

    const handleClickSelection = (e) => {
        selectMovie(e.target.parentElement.dataset.value);
        setSelectedSearchResult(0);
        setMovieSearch("");
    };

    return (
        <div className="NewMovieInput">
            <input
                type="text"
                className="NewMovie__search"
                value={movieSearch}
                onChange={(e) => setMovieSearch(e.currentTarget.value)}
                onKeyDown={selectSearchResult}
                autoFocus
            />
            <div className="SearchResults">
                {searchResults.length > 0 &&
                    searchResults.map((searchResult, i) => (
                        <div
                            className="SearchResult"
                            key={i}
                            index={i}
                            data-value={i}
                            onKeyDown={selectSearchResult}
                            onClick={handleClickSelection}
                        >
                            <div
                                className={`SearchResult__title ${
                                    i === selectedSearchResult ? "selected" : ""
                                }`}
                            >
                                {searchResult.title} (
                                {searchResult.release_date
                                    ? searchResult.release_date.slice(0, 4)
                                    : ""}
                                )
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default NewMovieInput;

// const apiTmdb = process.env.REACT_APP_TMDB_API_TOKEN;
// const apiUrl = `https://api.themoviedb.org/3/`;
// const baseUrl = "http://image.tmdb.org/t/p/";

// useEffect(() => {
//     if (movieSearch.length) {
//         const parsedSearchResult = movieSearch.split(" ").join("%20");
//         axios
//             .get(
//                 `${apiUrl}search/movie?api_key=${apiTmdb}&language=en-US&query=${parsedSearchResult}&include_adult=false&page=1`
//             )
//             .then((result) => {
//                 setSearchResults(result.data.results);
//             })
//             .catch(() => console.log("request failed"));
//     } else {
//         setSearchResults("");
//         setSelectedSearchResult(0);
//     }
// }, [movieSearch]);

// useEffect(() => {
//     axios
//         .get(`${apiUrl}configuration?api_key=${apiTmdb}`)
//         .then((result) => console.log(result.data));
// });

// const selectMovie = (index) => {
//     axios
//         .get(
//             `${apiUrl}movie/${searchResults[index].id}?api_key=${apiTmdb}&language=en-US`
//         )
//         .then((result) => {
//             console.log(result.data);
//             setSelectedMovie(result.data);
//             setSearchResults("");
//             setMovieSearch("");
//             setSelectedSearchResult(0);
//         })
//         .catch(() => console.log("selected movie request failed"));
// };
