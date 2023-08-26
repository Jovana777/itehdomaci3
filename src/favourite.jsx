import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from 'react';

const Favorites = ({ favoriteMovies }) => {
    useEffect(() => {
        console.log(favoriteMovies);
      }, [favoriteMovies]);

    return (
        <div className="container">
            {
                favoriteMovies.length != 0
                ? (
                    <div>
                        {}
                        {favoriteMovies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))};
                </div>
            ) :(
                <div>
                    <h2>Niste dodali nijedan film u omiljene</h2>
                </div>
            )

            }
    </div>
    )
};

export default Favorites;
