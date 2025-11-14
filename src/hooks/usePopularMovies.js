import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

// Here, I’ve created a custom hook called usePopularMovies.
// This hook is responsible for fetching data from the TMDB API and updating the Redux store with the results.
const usePopularMovies = () => {

    const dispatch = useDispatch();

    // Here calling the Popular Movies API from TMDB
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json = await data.json();
        // console.log("Popular Movies");
        // console.log(json.results);
        // Once the movie data is fetched from the API, I store it in the Redux store (specifically, in the movies slice).
        dispatch(addPopularMovies(json.results));
    }

    // I am calling the "getPopularMovies()" API inside the useEffect Hook
    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;