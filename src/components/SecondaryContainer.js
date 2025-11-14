import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  // Here subscribing to movies store and fetching movies data from store
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
        <div className='-mt-60 relative z-20 pl-8'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer
