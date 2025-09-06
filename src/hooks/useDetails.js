import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../services/movies";

function useDetails(id) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;
    async function load() {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(id);
        if (!isCancelled) setDetails(data);
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
  }, [id]);

  return { data: details, loading, error };
}

export default useDetails;
