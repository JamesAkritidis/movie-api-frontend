import React from "react";
import { useParams } from "react-router-dom";
import useAddMovie from "../../hooks/useAddMovie";
import "./NewMovieInput.css";

function NewMovieInput() {
    const { userid } = useParams();
    const [movieAttributes, movieInput, addMovie, setMovieInput] = useAddMovie(
        userid
    );

    return (
        <div className="NewMovieInput">
            {movieAttributes.map((movieAttribute, index) => (
                <input
                    className="NewMovieInput__input"
                    key={index}
                    type={movieAttribute.type}
                    name={movieAttribute.name}
                    placeholder={`add a ${movieAttribute.name}`}
                    onChange={(e) =>
                        setMovieInput({
                            ...movieInput,
                            [movieAttribute.name]: e.target.value,
                        })
                    }
                    value={movieInput[movieAttribute.name]}
                />
            ))}

            <input
                className="NewMovieInput__btn--add"
                type="submit"
                value="Submit the movie"
                onClick={addMovie}
            />
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
