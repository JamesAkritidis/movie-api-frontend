import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import "./NewMovieSearch.css";

function NewMovieSearch({
    setMovieSearch,
    searchResults,
    selectMovie,
    movieSearch,
    toggleMovieDetails,
    setWatchlistMovie,
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
                toggleMovieDetails(true);
                selectMovie(selectedSearchResult);
                setSelectedSearchResult(0);
                setMovieSearch("");
                setWatchlistMovie(false);
                toggleMovieDetails(true);
                break;
            default:
                break;
        }
    };

    const handleClickSelection = (e) => {
        selectMovie(e.target.parentElement.dataset.value);
        setSelectedSearchResult(0);
        setMovieSearch("");
        setWatchlistMovie(false);
        toggleMovieDetails(true);
    };

    return (
        <div className="NewMovieSearch">
            <input
                type="text"
                className="NewMovieSearch__input"
                placeholder="Add a new movie"
                value={movieSearch}
                onChange={(e) => setMovieSearch(e.currentTarget.value)}
                onKeyDown={selectSearchResult}
            />
            <button
                className="NewMovieSearch__button"
                onClick={() => toggleMovieDetails(true)}
            >
                <RiAddFill size={30} />
            </button>
            <div className="SearchResults">
                {searchResults.length > 0 &&
                    searchResults
                        .map((searchResult, i) => (
                            <div
                                className={`SearchResult ${
                                    i === selectedSearchResult ? "selected" : ""
                                }`}
                                key={i}
                                index={i}
                                data-value={i}
                                onKeyDown={selectSearchResult}
                                onClick={handleClickSelection}
                            >
                                <div className={`SearchResult__title`}>
                                    {searchResult.title} (
                                    {searchResult.release_date
                                        ? searchResult.release_date.slice(0, 4)
                                        : ""}
                                    )
                                </div>
                            </div>
                        ))
                        .slice(0, 5)}
            </div>
        </div>
    );
}

export default NewMovieSearch;
