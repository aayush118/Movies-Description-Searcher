import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2810906f";

const movie1 = 
    {
        "Title": "Spider-Man: Into The Spiderverse (2018)",
        "Year": "2018",
        "imdbID": "tt17978434",
        "Type": "movie",
        "Poster": "N/A"
    }

const App = () => {
    const [movies, setMovies] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovie = async (title) => { 
        const respose = await fetch(`${API_URL}&s=${title}`);
        const data = await respose.json();

        setMovies(data.Search);
    }
    
    useEffect(() => {
        searchMovie("across the spider verse ");
    }, []);

    return (
            <div className="app">
                <h1>Moovieees</h1>

                <div className="search">
                    <input placeholder="search for movies or series" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value) } />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovie(searchTerm)}
                />

                </div>

                {
                    movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                            
                    
                }
             
            </div>
    );
}

export default App;