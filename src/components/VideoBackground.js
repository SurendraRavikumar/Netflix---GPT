import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {

    // Here, I’m retrieving the trailer video from the store.
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    // This custom hook contains the logic how to get the trailer of the movie
    useMovieTrailer(movieId);

    return (
        // Here, in the `src`, I’m using `trailerVideo?.key`. The trailer is fetched from YouTube using this key from the trailer results.
        // Here, in the `src`, I’m using `"?&autoplay=1&mute=1"` so that the trailer plays automatically with the sound muted.

        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground;
