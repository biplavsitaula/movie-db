import { useNavigate, useSearchParams } from "react-router";
import { genre } from "../services/genre"

const GenreComponent = () => {
    const [params, setParams] = useSearchParams("");
    const navigate = useNavigate()

    const handleGenre = (newQuery) => {
        navigate('/')
        const newParams = new URLSearchParams();
        if (newQuery) newParams.set("genre", newQuery);
        setParams(newParams);
    }


    return (
        <div className="container mx-auto flex scrollbar-hide  overflow-x-auto my-4">
            {genre.map(gen => (
                <button
                    key={gen}
                    onClick={() => handleGenre(gen)}
                    className={
                        "cursor-pointer mr-2 rounded border whitespace-nowrap px-2 " +
                        (params.toString().includes(gen.split(" ").join('+')) ? "text-white bg-black" : "")
                    }
                >
                    {gen}
                </button>
            ))}
        </div>
    )



}
export default GenreComponent