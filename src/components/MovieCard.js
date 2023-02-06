import { IoAddCircleOutline } from "react-icons/io5";

const MovieCard = ({ movie }) => {
  return (
    <article className="movie-card">
      <img src={movie.Poster} alt="" />
      <div title="Add to Watchlist" className="bottom bg-stone-600 ">
      </div>
      <IoAddCircleOutline className='text-5xl text-stone-300'/>
    </article>
  )
}

export default MovieCard
