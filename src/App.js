import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
    const [movies, setMovies] = useState([]);

    const apiUrl = "http://localhost:5000/";

    useEffect(() => {
        axios
            .get("http://localhost:5000/movies")
            .then((response) => {
                setMovies(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="Main-and-Sidebar">
                <Sidebar />

                <Main movies={movies} />
            </div>
        </div>
    );
}

export default App;
