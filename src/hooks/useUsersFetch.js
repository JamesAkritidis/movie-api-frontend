import { useState, useEffect } from "react";
import axios from "axios";

function useUsersFetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/users") //this url returns a Json object with the user data
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
