import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import './App.css';

class App extends React.Component {
  state = {
    isLoaded: true,
    movies : []
  }

  getMovie = async () => {
    const { data: {
      data: {movies}
    }
  } = await axios.get("https://yts.mx/api/v2/list_movies.json")
    this.setState({movies, isLoaded:false})
  }

  componentDidMount() {
    this.getMovie()
  }


  render() {
    const {isLoaded, movies} = this.state
    return (
    <section className="container">
      {isLoaded ? 
      (<div className="loader">
        <span className="loader__text">Loading...</span>
      </div>) : (<div className="movies">
        {movies.map((movie)=>
        <Movie 
          key={movie.id} 
          id={movie.id} 
          title={movie.title} 
          year={movie.year} 
          rating={movie.rating}
          genres={movie.genres}
          summary={movie.summary} 
          poster={movie.medium_cover_image} />)}
      </div>)
        }
    </section>
    )
  }
}

export default App;
