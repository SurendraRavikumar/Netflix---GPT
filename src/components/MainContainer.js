import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    // Here, I am subscribing to (or accessing) the movies data[20 movies] from the Redux store.
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    // Initially, nowPlayingMovies is set to null.
    // So, I’ve added the below condition — if it’s null, simply return and stop further execution.
    // This is also know as early return
    if (!movies) return;

    // Here, I’m selecting only one main movie from the array of 20 movies, since the main component needs to display just a single movie — including its background trailer, title, and description.
    // The first movie in the list will be treated as the main movie.
    const mainMovie = movies[0];
    //console.log(mainMovie);

    const { original_title, overview , id } = mainMovie; // Destructuring the necessary properties from mainMovie and passing them as props wherever needed.

    return (
        <div>
            <VideoTitle title={original_title} overview= {overview}/>
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;
