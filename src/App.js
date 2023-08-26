import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import NavBar from "./navBar";
import Favorites from './favourite';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const API_URL = 'http://www.omdbapi.com?apikey=3dd7ec42';



const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    
    const searchMovie = async (title) => {
        if(title == '') title = 'Movie';  
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    const addToFavorites = (movie) => {
        setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
      };


    useEffect(() => {
        searchMovie('Movie');   
        console.log(favoriteMovies)
    }, [favoriteMovies]); 
    
    return(
        <BrowserRouter>
            {}
            <NavBar /> 
        <div className="title">
            <h1> Zemlja filmova </h1>
                <div className="search">
                <input placeholder="Pretraži film" value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)}/>
            </div>
        </div>
            <Routes>
            <Route
          path="/"
          element=
            {
                
                movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} addToFavorites={addToFavorites}/>
                        ))}
                </div>)
                : (
                    <div className="empty">
                        <h2>Nije pronađen nijedan film</h2>
                    </div>
                )
            }
            />

        {}
        <Route path="/favorites" element={<Favorites favoriteMovies={favoriteMovies} />} />    
            </Routes>
        </BrowserRouter>
    );
}

export default App;