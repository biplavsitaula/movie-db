import React, { useEffect, useState } from 'react';
// import useDetails from '../hooks/useDetails';
import MovieCard from '../components/MovieCard';
import { fetchMovieDetails } from '../services/movies';

function Favorite() {
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('favorite');
        if (stored) {
            try {
                setFavoriteIds(JSON.parse(stored));
            } catch (err) {
                console.error("Failed to parse favorites:", err);
            }
        }
    }, []);

    useEffect(() => {
        if (!favoriteIds.length) return;

        const fetchFavorites = async () => {
            const promises = favoriteIds.map(async (id) => {
                const { data } = await fetchMovieDetails(id);
                return data;
            });

            const movies = await Promise.all(promises);
            setFavoriteMovies(movies);
        };

        fetchFavorites();
    }, [favoriteIds]);

    if (!favoriteIds.length) {
        return <div className="container mx-auto text-center p-4">No favorites yet</div>;
    }




    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>Favorite</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteMovies.map((movie) => (<>
                    <MovieCard key={movie.movie.id} movie={movie.movie} />
                </>))}
            </div>
        </div>
    );
}

export default Favorite;
