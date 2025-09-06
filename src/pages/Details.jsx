
import { useNavigate, useParams, useSearchParams } from 'react-router';
import useDetails from '../hooks/useDetails';
import { Star } from 'lucide-react';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

function Details() {
    const [params, setParams] = useSearchParams("");
    const navigate = useNavigate();

    const { id } = useParams();

    const { data, loading, error } = useDetails(id);

    const handleGenre = (newQuery) => {
        navigate('/')
        const newParams = new URLSearchParams();
        if (newQuery) newParams.set("genre", newQuery);
        setParams(newParams);
    }

    return (
        <div className='container mx-auto p-4'>
            {loading && <Spinner />}
            {error && <Error>{error.message}</Error>}
            {!loading && data?.data?.movie && (
                <div className='text-white overflow-clip flex-col md:flex-row flex bg-black rounded-lg shadow-lg'>
                    <img src={data.data.movie.large_cover_image} alt={data.data.movie.title_long} className='w-full md:w-1/2 h-auto' />

                    <div className='p-4 flex flex-col'>
                        <div className='flex items-center gap-1 my-2'>
                            <p className='flex text-gray-300 items-center gap-1'>
                                <Star className='text-yellow-300' /> {data?.data?.movie.rating}
                            </p>
                            &bull;
                            <p className='text-gray-300'>{data?.data?.movie.year}</p>
                        </div>
                        <div className='my-2'>
                            {data.data.movie.genres.map(gen => (
                                <button
                                    key={gen} onClick={() => handleGenre(gen)} className='cursor-pointer mr-2 rounded border w-fit px-2 my-2'>
                                    {gen}
                                </button>
                            ))}
                        </div>
                        <h1 className='text-3xl font-bold my-2'>{data.data.movie.title_long}</h1>
                        <p className='my-2'><strong>Description:</strong><br /> {data.data.movie.description_full || '--'}</p>
                    </div>
                </div>
            )}
            {!error && !loading && !data?.data?.movie && <p className='text-center'>Movie not found</p>}
        </div>
    )
}

export default Details