import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  // The custom hook contains the logic for fetching NowPlayingMovie data from the TMDB API and updating the Redux store accordingly.
  useNowPlayingMovies();

  // The custom hook contains the logic for fetching PopularMovie data from the TMDB API and updating the Redux store accordingly.
  usePopularMovies();

  // The custom hook contains the logic for fetching TopRatedMovie data from the TMDB API and updating the Redux store accordingly.
  useTopRatedMovies();

  // The custom hook contains the logic for fetching UpcomingMovies data from the TMDB API and updating the Redux store accordingly.
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
