export async function fetchMovies(props) {
  const { search = "", page = 1, genre = "" } = props || {};

  const queries = new URLSearchParams({
    limit: 10,
    page: page,
  });

  if (genre) {
    queries.append("genre", genre);
  }

  if (search?.trim()) {
    queries.append("query_term", search);
  }

  const url = `${
    import.meta.env.VITE_BACKEND_URL
  }/list_movies.json?${queries.toString()}`;

  const response = await fetch(url);

  if (!response.ok) throw new Error("Failed to fetch movies");
  return response.json();
}

export async function fetchMovieDetails(id) {
  if (!id) throw new Error("Movie ID is required");

  const url = `${
    import.meta.env.VITE_BACKEND_URL
  }/movie_details.json?movie_id=${id}`;

  const response = await fetch(url);

  if (!response.ok) throw new Error("Failed to fetch movie details");
  return response.json();
}
