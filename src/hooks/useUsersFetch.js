import { useState, useEffect } from "react";
import axios from "axios";
import API_ROOT from "../utils/constants"

function useUsersFetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_ROOT}users`) //this url returns a Json object with the user data
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return users;
}

export default useUsersFetch;
