import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";

const SearchComponent = ({ searchTerm, onSearch }) => {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState(searchTerm);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query.trim());
    };

    return (
        <div className="flex items-center justify-center">
            <div
                className={`flex items-center border border-gray-300 rounded-full bg-white shadow-sm overflow-hidden transition-all duration-300 ${open ? "w-64 h-10 px-2" : "w-10 h-10"
                    }`}
            >
                {open ? (
                    <>
                        <Search className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
                        <form onSubmit={handleSubmit} className="flex-grow w-full" >
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search..."
                                className="w-full outline-none bg-transparent"
                                autoFocus
                            />
                        </form>
                        <X
                            className="w-5 h-5 text-gray-400 cursor-pointer ml-2 shrink-0"
                            type="button"
                            onClick={() => setOpen(false)
                            }
                        />
                    </>
                ) : (
                    <button
                        onClick={() => setOpen(true)}
                        className="w-full h-full flex items-center justify-center"
                    >
                        <Search className="cursor-pointer w-5 h-5 text-gray-500" />
                    </button>
                )}
            </div>
        </div >
    );
};

export default SearchComponent;
