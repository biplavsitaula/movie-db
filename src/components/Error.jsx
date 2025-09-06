
function Error({ children }) {
    return (
        <p className='bg-red-500/50 border text-black border-red-500 p-2 rounded'>Error: {children}</p>
    )
}

export default Error