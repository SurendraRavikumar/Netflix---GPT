// The API I called [ TMDB MOVIES LIST - Now Playing ]previously doesn’t return the trailer information.
// So, I need to call a different API [TMDB MOVIES - Vides] to get the trailer.
// This new API requires the movie ID to fetch the trailer.
// I already have the movie ID from the previous API call.
// I’m passing this movie ID as a prop to the component that will fetch the trailer.
// Additionally, this API requires an API key to access the trailer from YouTube.
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    // Here i am calling the API from TMDB for getting trailer
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);

        // Here, json.results contains 15 videos. How can we identify which one is the trailer?
        // Here, I’m filtering the 15 videos by their type to extract the trailer.
        const filterData = json.results.filter(video => video.type == "Trailer");

        // If there is no video with type `"Trailer"` in the 15 results, we fall back to using the first video (`json.results[0]`), which could be a clip, teaser, or any other type.
        const trailer = filterData.length ? filterData[0] : json.results[0]; // Here, filterData returns multiple trailers, so I’m taking the first trailer from the list.

        //console.log(trailer);

        // Here, I’m storing the trailer video in the Redux store.
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, [])

};

export default useMovieTrailer;