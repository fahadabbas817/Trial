export const TMDB_API_CONFIG = {
  baseUrl: "https://api.themoviedb.org/3",
  apiKey: import.meta.env.VITE_TMDB_API_KEY ,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

export async function searchMovies(query, page = 1) {
  const res = await fetch(`${TMDB_API_CONFIG.baseUrl}/search/movie?api_key=${TMDB_API_CONFIG.apiKey}&query=${query}&page=${page}`,{headers: TMDB_API_CONFIG.headers});
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}
