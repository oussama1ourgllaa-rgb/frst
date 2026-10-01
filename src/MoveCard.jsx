const MovieCard=({movie,onDelete,onLike})=>{
return(
    <div className="col-md-4">
    <div className="card h-100 shadow-sm">
        <img src={movie.image} className="card-img-top" alt={movie.title} style={{height:"400px",objectFit:"cover"}} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">{movie.title}</h5>
            <span className="badge bg-primary mb-4">{movie.category}</span>
            <div className="mt-auto d-flex justify-content-between gap-2">
                <button type="button" className={movie.liked ? "btn btn-danger" : "btn btn-outline-success"} onClick={()=>onLike(movie.id)}>
                    <i className={movie.liked ? 'bi bi-hand-thumbs-up-fill me-2' : 'bi bi-hand-thumbs-up me-2'}></i>
                    {movie.liked ? 'Liked' : 'Like'}
                </button>
                <button type="button" className="btn btn-outline-dark" onClick={()=>onDelete(movie.id)}>
                    <i className="bi bi-trash me-2"></i>
                    Delete
                </button>
            </div>
        </div>
    </div>
    </div>

)
}
export default MovieCard;