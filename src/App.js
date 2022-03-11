import './App.css';
import React,{useState,useEffect} from 'react';
import TrendingMovie from './components/TrendingMovie.js';
function App() {
  const APIKey = 'YOUR_API_KEY';
  const [Movies,setMovies] = useState([]);
  const [searchMovie,setsearchMovie] = useState("");

  const TrendingMoviesAPI = `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}`
  const searchMovieAPI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${searchMovie}&page=1&include_adult=false&region=CA`
  
  useEffect(()=>{
      fetch(TrendingMoviesAPI)
      .then((res)=> res.json())
      .then((data)=> {
          setMovies(data.results);
      });
  },[]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchMovie){
    fetch(searchMovieAPI)
      .then((res)=> res.json())
      .then((data)=> {
          setMovies(data.results);      
         });
        }
        setsearchMovie("");
  };
  return (
    <div>
      <header className='App-header'>
        <div className='App-name'><h1> Movie Recommender</h1></div>
        <form onSubmit={handleSubmit}>
        <input className='search-bar' 
          placeholder='Search Movie'
          value={searchMovie}
          onChange={(e) => setsearchMovie(e.target.value)}
        />
        </form>
      </header>
    
    <div className="movie-container">
      {Movies.length > 0 && Movies.map((movie)=>
        <TrendingMovie key={movie.id} {...movie}/>)
      }
    </div>
    </div>
  );
}

export default App;
