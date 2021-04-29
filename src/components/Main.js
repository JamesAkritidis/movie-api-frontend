import React from "react";

function Main({ movies }) {
    return (
        <div className="Main">
            {movies.map((item) => (
                <>
                    <div>{item.title}</div>
                    <div>{item.director}</div>
                    <div>{item.screenwriter}</div>
                    <div>{item.moviecast}</div>
                    <div>{item.runtime}</div>
                    <div>{item.year}</div>
                    <div>{item.rating}</div>
                </>
            ))}
        </div>
    );
}

export default Main;
