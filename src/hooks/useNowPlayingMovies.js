import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

// Here, I’ve created a custom hook called useNowPlayingMovies.
// This hook is responsible for fetching data from the TMDB API and updating the Redux store with the results.
const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();

    // Here calling the NowPlaying Movies API from TMDB
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        //  console.log("Now playing Movies");
        //  console.log(json.results);
        // Once the movie data is fetched from the API, I store it in the Redux store (specifically, in the movies slice).
        dispatch(addNowPlayingMovies(json.results));
    }

    // I am calling the "getNowPlayingMovies()" API inside the useEffect Hook
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;