import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/movies';

export default function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('favorite');
    const ids = stored ? JSON.parse(stored) : [];

    if (!Array.isArray(ids)) {
      console.error("Invalid favorite IDs in localStorage");
      setFavoriteIds([]);
      setFavoriteMovies([]);
      setLoading(false);
      return;
    }

    setFavoriteIds(ids);

    if (!ids.length) {
      setFavoriteMovies([]);
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        const movies = await Promise.all(
          ids.map(async (id) => {
            try {
              const { data } = await fetchMovieDetails(id);
              return data?.movie || null;
            } catch (err) {
              console.error(`Failed to fetch movie ${id}:`, err);
              return null;
            }
          })
        );

        setFavoriteMovies(movies.filter(Boolean));
      } catch (err) {
        console.error("Failed to fetch favorite movies:", err);
        setFavoriteMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return { favoriteIds, favoriteMovies, loading };
}
