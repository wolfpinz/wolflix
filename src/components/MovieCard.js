


const MovieCard = ({ movie, onCardClick }) => {


  return (
    <article onClick={() => {onCardClick(movie)}} className="relative movie-card">
      <img src={movie.Poster} alt="" />
      <div title="Add to Watchlist" className="">
      </div>
    </article>
  )
}

export default MovieCard
