import React from "react";
import axios from "axios";
import API_ROOT from "../utils/constants"

function useDeleteMovie() {
    const deleteMovie = (userid, movieid) => {
        axios
            .delete(`${API_ROOT}users/${userid}/movies/${movieid}`)

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
