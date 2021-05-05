import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddMovie from "../../hooks/useAddMovie";
import { movieSchema } from "../../utils/movieItemSchema";
import "./NewMovieInput.css";

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
            {/* {movieSchema.map((movieAttribute, index) => (
                <div className="NewMovieInput__input">
                    <label for={movieAttribute.name}>
                        {movieAttribute.name}
                    </label>
                    <input
                        className="NewMovieInput__input__field"
                        key={index}
                        type={movieAttribute.type}
                        name={movieAttribute.name}
                        id={movieAttribute.name}
                        placeholder={`add a ${movieAttribute.name}`}
                        onChange={(e) =>
                            setMovieInput({
                                ...movieInput,
                                [movieAttribute.name]: e.target.value,
                            })
                        }
                        value={movieInput[movieAttribute.name]}
                    />

                </div>
            ))} */}
                    { movieData.title ? 
                        (
                         <>
                            <div className="movie-attributes--title" >
                        {movieData.title} (
                        {movieData.year})
                        </div>
                    <div className="movie-attributes__poster-info">

                    <img src={movieData.poster} className="movie-attributes--poster" />
                    <div className="movie-attributes__info">
                        <div className="movie-attributes" >
                            {movieData.runtime} min</div>
                        <div className="movie-attributes" >
                            {movieData.genres}</div>
                        <div className="movie-attributes" >
                            {movieData.overview}</div>
                        <div className="movie-attributes" >
                            {movieData.screenwriter}</div>
                        <div className="movie-attributes" >
                            {movieData.cast}</div>
                        <div className="movie-attributes" >
                            {movieData.imdblink}</div>
                        <div className="movie-attributes" >
                            {movieData.watched}</div>
                        </div>
                    </div>
                    <input
                className="NewMovieInput__btn--add"
                type="submit"
                value="Submit the movie"
                onClick={addMovie}
            />
                    </>
                    ) : ''
                    }

        </div>
    );
}

export default NewMovieInput;

// <form className="form">
//     <input
//         type="text"
//         name="title"
//         placeholder="add a title"
//         onChange={(e) =>
//             setMovieInput({ ...movieInput, title: e.target.value })
//         }
//         value={movieInput.title}
//     />
//     <input
//         type="text"
//         name="director"
//         placeholder="add a director"
//         onChange={(e) =>
//             setMovieInput({
//                 ...movieInput,
//                 director: e.target.value,
//             })
//         }
//         value={movieInput.director}
//     />
//     <input
//         type="text"
//         name="screenwriter"
//         placeholder="add a screenwriter"
//         onChange={(e) =>
//             setMovieInput({
//                 ...movieInput,
//                 screenwriter: e.target.value,
//             })
//         }
//         value={movieInput.screenwriter}
//     />
//     <input
//         type="text"
//         name="Cast"
//         placeholder="add the cast"
//         onChange={(e) =>
//             setMovieInput({
//                 ...movieInput,
//                 moviecast: e.target.value,
//             })
//         }
//         value={movieInput.moviecast}
//     />
//     <input
//         type="number"
//         name="year"
//         placeholder="add a year"
//         onChange={(e) =>
//             setMovieInput({ ...movieInput, year: e.target.value })
//         }
//         value={movieInput.year}
//     />
//     <input
//         type="number"
//         name="runtime"
//         placeholder="add the runtime"
//         onChange={(e) =>
//             setMovieInput({
//                 ...movieInput,
//                 runtime: e.target.value,
//             })
//         }
//         value={movieInput.runtime}
//     />
//     <input
//         type="number"
//         name="rating"
//         placeholder="add the rating"
//         onChange={(e) =>
//             setMovieInput({
//                 ...movieInput,
//                 rating: e.target.value,
//             })
//         }
//         value={movieInput.rating}
//     />
