import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 h-72 pr-4'>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} className="w-full h-full object-cover rounded" />
    </div>
  )
}

export default MovieCard
