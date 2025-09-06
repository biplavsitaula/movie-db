import { useEffect, useState } from 'react'
import useMovies from '../hooks/useMovies'
import SearchComponent from '../components/Search';
import MovieCard from '../components/MovieCard';
import MovieCardSkeleton from '../components/MovieCardSkeleton';
import { generatePath, useSearchParams } from 'react-router';
import GenreComponent from '../components/Genre';

function Home() {
    const [params, setParams] = useSearchParams("");

    const queryParam = params.get("query") || "";
    const pageParam = parseInt(params.get("page") || "1", 10);
    const genreParams = params.get("genre")

    const { data, loading, error } = useMovies({ search: queryParam, page: pageParam, genre: genreParams });


    const handleSearch = (newQuery) => {
        const newParams = new URLSearchParams();
        if (newQuery) newParams.set("query", newQuery);
        setParams(newParams);
    };

    const handlePageChange = (newPage) => {
        const newParams = new URLSearchParams();
        if (queryParam) newParams.set("query", queryParam);
        if (genreParams) newParams.set('genre', genreParams);
        if (newPage > 1) newParams.set("page", newPage);
        setParams(newParams);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pageParam]);


    return (
        <div className='container mx-auto p-4'>
            <div className='flex items-center justify-between mb-4 '>
                <h1 className='text-3xl font-bold'>Movies</h1>
                <SearchComponent searchTerm={queryParam} onSearch={handleSearch} />
            </div>
            {data && <GenreComponent />}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {loading
                    && Array.from({ length: 10 }).map((_, i) =>
                        <MovieCardSkeleton key={i} />
                    )}
            </div>

            {error && <p className='bg-red-500/50 border text-black border-red-500 p-2 rounded'>Error: {error.message}</p>}

            {!loading && data?.data?.movies?.length > 0 && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {data?.data?.movies?.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>}

            {!error && !loading && data?.data?.movies && data?.data?.movies?.length === 0 && <p className='text-center'>No movies found</p>}

            {(data?.data?.movie_count > 10) && <div className='flex items-center justify-center mt-4'>
                <button disabled={data?.data?.page_number == 1} onClick={() => handlePageChange(pageParam - 1)} className='mt-4 px-4 py-2  text-white rounded-lg bg-red-500 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed'>Prev</button>
                <button
                    disabled={data?.data?.page_number == Math.round(data?.data?.movie_count / 10)}
                    onClick={() => handlePageChange(pageParam + 1)} className='mt-4 ml-2 px-4 py-2  text-white rounded-lg bg-red-500 cursor-pointer disabled:bg-gray-500 disabled:cursor-not-allowed'>Next</button>
            </div>}
        </div>
    )
}

export default Home