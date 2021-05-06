import React from "react";
import axios from "axios";

function useDeleteMovie() {
    const deleteMovie = (userid, movieid) => {
        axios
            .delete(`http://localhost:5000/users/${userid}/movies/${movieid}`)

            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return deleteMovie;
}

export default useDeleteMovie;
