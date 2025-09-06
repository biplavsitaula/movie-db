import { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router';

function MovieCard({ movie }) {


    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("favorite");
        if (stored) {
            try {
                setFavorite(JSON.parse(stored));
            } catch (err) {
                console.error("Invalid favorites in localStorage:", err);
            }
        }
    }, []);

    const handleFavorite = (id) => {
        let stored = [];
        try {
            stored = JSON.parse(localStorage.getItem("favorite")) || [];
        } catch (err) {
            console.error("Failed to parse favorites:", err);
        }

        const updated = stored.includes(id)
            ? stored.filter(favId => favId !== id)
            : [...stored, id];

        setFavorite(updated);
        localStorage.setItem("favorite", JSON.stringify(updated));
    };

    return (
        <div className="relative text-white bg-black rounded-lg shadow-lg group overflow-hidden">

            <button
                onClick={() => handleFavorite(movie.id)}
                className={`cursor-pointer z-10 p-2 rounded-full absolute top-1 right-1 shadow-xl 
          ${favorite.includes(movie.id) ? "bg-red-500" : "bg-black/50"}`}
            >
                <Heart />
            </button>

            <Link to={`/${movie.id}`}>
                <picture>
                    <source media="(min-width: 1024px)" srcSet={movie?.large_cover_image} />
                    <source media="(min-width: 640px)" srcSet={movie?.medium_cover_image} />
                    <img
                        loading="lazy"
                        src={movie.medium_cover_image || "https://placehold.co/600x400/png"}
                        alt={movie.title}
                        className="group-hover:scale-105 duration-300 w-full h-64 object-cover"
                    />
                </picture>
            </Link>

            <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                    <p className="flex text-gray-300 items-center gap-1">
                        <Star className="text-yellow-300" /> {movie.rating}
                    </p>
                    &bull;
                    <p className="text-gray-300">{movie.year}</p>
                </div>
                <Link to={`/${movie.id}`}>
                    <h2 className="hover:underline text-xl font-semibold mb-2">{movie.title}</h2>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;
