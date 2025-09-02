import { useState, useEffect, useCallback } from "react";
import SearchInput from "../components/search-input";
import MovieCard from "../components/item-card";
import { searchMovies } from "../services/tmdb";
import useDebounce from "../hooks/useDebounce";
import Loading from "../components/loader";
import EmptyState from "../components/empty";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = useCallback(async () => {
    if (!debouncedQuery) {
      setMovies([]);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await searchMovies(debouncedQuery);
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      setError(err.message || "Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-4"> Movie Search</h1>

      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />

      {loading && <Loading />}
      {error && <Error onRetry={fetchMovies} />}
      {!loading && !error && debouncedQuery && movies.length === 0 && (
        <EmptyState/>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
