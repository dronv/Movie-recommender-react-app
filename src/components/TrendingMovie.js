import  React from 'react';
import './TrendingMovie.css';

const Image_path = 'https://image.tmdb.org/t/p/w500'
const TrendingMovie = ({title, poster_path,overview,vote_average}) =>(
    <div className="movie-container">
        <div className='movie'> 
            <img className='movie-img' src={Image_path + poster_path} alt={title} ></img>
            <div className='movie-title'><b>{title}</b>
                <span> {vote_average}</span>
            </div>
            <div className='movie-overview'>
                <h2>Overview</h2>
                <p> {overview} </p>
            </div>
        </div>
    </div>
);
export default TrendingMovie;
