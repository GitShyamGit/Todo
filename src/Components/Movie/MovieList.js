import React, { Component } from 'react';
import { movies } from './getMovies';
export default class MovieList extends Component {
    constructor(){
        super()
        this.state ={
            hover:'',
            parr:[1]
        }
    }
  render() {
    let movie = movies.results
    return <>
        {
        movie==="" || movie.length===0
            ?
            <div className="spinner-border m-5" role="status">
                 <span className="visually-hidden">Loading...</span>
             </div>
            :
            <div>
                <h3 className="text-center"><strong>Trending</strong></h3>
                    <div className="movies-list">
                        {
                            movie.map((movieObj)=>(
                                <div className="card movie-card" onMouseLeave={()=>this.setState({hover:''})} 
                                onMouseEnter={()=>this.setState({hover:movieObj.id})}>
                                     <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                                      className="movie-img" alt={movieObj.title} />
                               
                                    <h5 className="card-title movie-title">{movieObj.original_title}</h5>
                                    {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
                                    <div className='button-wrapper' style={{display:'flex',width:'100%',justifyContent:'center'}}>
                                       {
                                             this.state.hover==movieObj.id &&
                                             <a  className="btn btn-primary movies-button">Add Favourites</a>
                                         }
                                    </div>
                                
                                </div>
                            ))
                        }
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {
                                this.state.parr.map((Pval)=>(
                                    <li class="page-item"><a class="page-link" href="#">{Pval}</a></li>
                                ))
                            }
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                   </nav>
                    </div>
            </div>
        }
       </>;
  }
}
