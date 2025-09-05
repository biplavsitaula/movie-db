import { useEffect, useState } from "react";
import { fetchMovies } from "../services/movies";

function useMovies({ search = "", page = 1 } = {}) {
  console.log(search, page);

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function load() {
      try {
        setLoading(true);
        const data = await fetchMovies({ search, page });
        if (!isCancelled) setMovies(data);
      } catch (err) {
        if (!isCancelled) setError(err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    load();

    return () => {
      isCancelled = true;
    };
  }, [search, page]);

  return { data: movies, loading, error };
}

export default useMovies;
