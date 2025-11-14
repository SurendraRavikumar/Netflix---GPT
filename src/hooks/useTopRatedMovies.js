import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

// Here, I’ve created a custom hook called usePopularMovies.
// This hook is responsible for fetching data from the TMDB API and updating the Redux store with the results.
const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    // Here calling the TopRated Movies API from TMDB
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const json = await data.json();
        // console.log("Top Rated Movies");
        // console.log(json.results);
        // Once the movie data is fetched from the API, I store it in the Redux store (specifically, in the movies slice).
        dispatch(addTopRatedMovies(json.results));
    }

    // I am calling the "getTopRatedMovies()" API inside the useEffect Hook
    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;