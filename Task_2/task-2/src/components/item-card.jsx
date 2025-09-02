const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={movie.poster_path ? IMG_BASE + movie.poster_path : "https://via.placeholder.com/500x750?text=No+Image"}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-lg truncate">{movie.title}</h3>
        <p className="text-sm text-gray-500">
          {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
        </p>
        <p className="text-sm mt-1">⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
