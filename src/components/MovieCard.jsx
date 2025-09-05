import { Star } from 'lucide-react'

function MovieCard({ movie }) {
    return (
        <div className='cursor-pointer text-white bg-black rounded-lg shadow-lg group overflow-hidden'>
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet={movie?.large_cover_image}
                />
                <source
                    media="(min-width: 640px)"
                    srcSet={movie?.medium_cover_image}
                />
                <img
                    loading="lazy"
                    src={movie.medium_cover_image || "https://placehold.co/600x400/png"}
                    alt={movie.title}
                    className="group-hover:scale-105 duration-300 w-full h-64 object-cover"
                />
            </picture>
            <div className='-full p-4'>
                <div className='flex items-center gap-1 mb-2'>
                    <p className='flex text-gray-300 items-center gap-1'>
                        <Star className='text-yellow-300' /> {movie.rating}
                    </p>
                    &bull;
                    <p className='text-gray-300'>{movie.year}</p>
                </div>
                <h2 className='text-xl font-semibold mb-2'>{movie.title}</h2>
            </div>
        </div>
    )
}

export default MovieCard