import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  // this is declare that I'll use in the future
  state = {
    isLoading : true,
    movies : []
  };

  // axios is slowly so we need this await, async
  getMovies = async() => {
    const {
      data: { 
        data : {movies}
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading : false });
  };

  // do this after rendering 
  componentDidMount(){
    this.getMovies();
  }

  // do rendering area  
  render (){
    const { isLoading , movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres = {movies.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}


export default App;
