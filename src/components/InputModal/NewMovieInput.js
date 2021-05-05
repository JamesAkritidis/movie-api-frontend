import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddMovie from "../../hooks/useAddMovie";
import "./NewMovieInput.css";
import { SiImdb } from "react-icons/si";

function NewMovieInput({ movieData }) {
    const { userid } = useParams();
    const [movieInput, addMovie, setMovieInput] = useAddMovie(userid);

    useEffect(() => {
        if (movieData) {
            setMovieInput({ ...movieData });
        }
    }, [movieData]);

    return (
        <div className="NewMovieInput">
            {movieData.title ? (
                <>
                    <div className="movie-attributes--title">
                        {movieData.title} ({movieData.year})
                    </div>
                    <div className="movie-attributes__poster-info">
                        <img
                            src={movieData.poster}
                            className="movie-attributes--poster"
                        />
                        <div className="movie-attributes__info">
                            <div className="movie-attributes">
                                {movieData.runtime} min
                            </div>
                            {movieData.genres ? (
                                <div className="movie-attributes">
                                    Genre:{movieData.genres}
                                </div>
                            ) : (
                                ""
                            )}
                            {movieData.director.length ? (
                                <div className="movie-attributes">
                                    Director: {movieData.director}
                                </div>
                            ) : (
                                ""
                            )}
                            {movieData.screenwriter.length ? (
                                <div className="movie-attributes">
                                    Screenwriter: {movieData.screenwriter}
                                </div>
                            ) : (
                                ""
                            )}
                            {movieData.cast ? (
                                <div className="movie-attributes">
                                    Cast: {movieData.cast}
                                </div>
                            ) : (
                                ""
                            )}
                            <div className="movie-attributes imdb-icon">
                                <a href={movieData.imdblink}>
                                    <SiImdb />
                                </a>
                            </div>
                            <div className="movie-attributes">
                                {movieData.watched}
                            </div>
                        </div>
                    </div>
                    <div className="movie-attributes movie-overview">
                        {movieData.overview}
                    </div>
                    <input
                        className="NewMovieInput__btn--add"
                        type="submit"
                        value="Submit the movie"
                        onClick={addMovie}
                    />
                </>
            ) : (
                ""
            )}
        </div>
    );
}

export default NewMovieInput;
