import { useState, useEffect } from "react";
import axios from "axios";

function useUsersFetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/users")
            .then((response) => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return users;
}

export default useUsersFetch;
