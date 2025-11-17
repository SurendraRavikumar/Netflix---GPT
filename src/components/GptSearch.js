import GptSearchBar from './GptSearchBar'
import GptMovieSuggesations from './GptMovieSuggesations'
import { BACKGROUND_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('${BACKGROUND_URL}')`
            }}
        >
            <GptSearchBar />
            <GptMovieSuggesations />
        </div>
    )
}

export default GptSearch
