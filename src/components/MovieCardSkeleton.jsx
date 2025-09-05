function MovieCardSkeleton() {
    return (
        <div className="cursor-pointer bg-black rounded-lg shadow-lg group overflow-hidden animate-pulse">
            <div className="w-full h-64 bg-gray-800"></div>
            <div className="p-4">
                <div className="h-5 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
        </div>
    );
}

export default MovieCardSkeleton;