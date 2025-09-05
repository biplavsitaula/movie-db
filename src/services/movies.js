export async function fetchMovies(props) {
  const { search = "", page = 1 } = props || {};

  const queries = new URLSearchParams({
    limit: 10,
    page: page,
  });

  if (search.trim()) {
    queries.append("query_term", search);
  }

  const url = `${import.meta.env.VITE_BACKEND_URL}?${queries.toString()}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch movies");
  return response.json();
}
