import React from "react";
import "./MovieItem.css";
import { VscTrash } from "react-icons/vsc";
import axios from "axios";

function MovieItem({ movie }) {
    const deleteMovie = (e) => {
        e.preventDefault();
        axios
            .delete(
                `http://localhost:5000/users/${movie.userid}/movies/${movie.movieid}`
            )

            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // movieid userid less GO ! {movie.userid} {movei.movieid}
    // dejavu ! i've just been in this place before
    // CORRECT !
    // GEWINNEN ! GEWINNEN !
    // we are the champions my friends!
    // Now lets do the EDIT function !
    // this is the front-end
    // template literals rock ! and roll !
    // backticks roll !!
    // dance with me bearded Henning
    // Y U ignore my dance request :(((((
    // why u ignore the dance
    // because of ME !
    // yes me sad also
    // giff dance Mr.Henning
    // lonely i'm so lonely i have nobody.......OUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
    // Yes ! ?????????????????????????????????
    // i am always happy :)
    // DANCE DANCE DANCE ! ooooooo nice i'll do the robot dance
    // so sad the Edit button is. Yoda style
    // tomorrow celebrate we shall, Yoda happy will be
    // i might watch the new movies tomorrow !
    // YES !
    // Star Wars holiday !
    // alright :)
    // can i work on the frontend ?
    return (
        <div className="MovieItem">
            <div>
                <button className="delete-movie">
                    {" "}
                    <VscTrash size="20px" color="black" onClick={deleteMovie} />
                </button>
            </div>
            <img
                src={movie.poster}
                alt={`Poster ${movie.title}`}
                className="MovieItem__poster"
            />
            <div className="MovieItem__info">
                <div className="MovieItem__title">{movie.title}</div>
                {/* <div>Genres: {movie.genres}</div>
                <div>Director: {movie.director}</div>
                <div>Screenwriter: {movie.screenwriter}</div>
                <div>Cast: {movie.moviecast}</div>
                <div>Runtime: {movie.runtime}min</div>
                <div>imdb Link: {movie.imdblink}</div> */}
            </div>
        </div>
    );
}

export default MovieItem;
