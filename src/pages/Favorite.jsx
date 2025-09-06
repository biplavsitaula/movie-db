import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import useFavorites from '../hooks/useFavourite';

function Favorite() {
    const { favoriteIds, favoriteMovies, loading } = useFavorites();

    if (loading) {
        return <Spinner />;
    }

    if (!favoriteIds.length) {
        return <div className="container mx-auto text-center p-4">No favorites yet</div>;
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>Favorite</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Favorite;
