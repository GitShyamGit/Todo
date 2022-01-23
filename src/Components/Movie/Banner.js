import React, { Component } from 'react';
import {movies} from "./getMovies"
export default class Banner extends Component {
  render() {
      let movie = movies.results[0]
   /// let movie =""
    return <>
    {
         movie===""?
         <div className="spinner-border m-5" role="status">
         <span className="visually-hidden">Loading...</span>
       </div> :
            <div className="card banner-card" >
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="banner-img" alt={movie.title} />
           
                <h1 className="card-title banner-title">{movie.original_title}</h1>
                <p className="card-text banner-text">{movie.overview}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            
            </div>
            
    }
    </>;
  }
}
