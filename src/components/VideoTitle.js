
const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black py-2 px-6 text-xl rounded-lg hover:bg-opacity-80 '> ▶️ Play</button>
        <button className='bg-gray-500 bg-opacity-50 text-white py-2 px-6 text-xl rounded-lg mx-2'> ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
