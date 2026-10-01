import {useState,useEffect} from 'react';
import MovieCard from './MoveCard';
import axios from "axios";

const MovieList=()=>{
    const [movies,setMovies]=useState([]);
    const [search,setSearch]=useState("");
    const [category,setCategory]=useState("Tous");
    const [filteredMovies,setFilteredMovies]=useState([]);
    useEffect(()=>{

        axios.get("http://localhost:3005/movies").then(response=>{
                                                        setMovies(response.data);
                                                        setFilteredMovies(response.data);
                                                                  })
        /*fetch("http://localhost:3005/movies")
            .then(response => response.json())
            .then((data)=> {
                setMovies(data);
                setFilteredMovies(data);
            });*/
    }, []);

    const categories=["Tous",...new Set(movies.map((movie)=>movie.category))];
    useEffect(()=>{
        let result=[...movies];
        if(category!=="Tous"){
            result=result.filter((movie)=>movie.category===category);
        }
        if(search.trim()!==""){
            result=result.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()));
        }
        setFilteredMovies(result);
    }, [search, category, movies]);
    const deleteMovie=(id)=>{
        setMonies((movies)=>movies.filter((movie)=>movie.id!==id));
    }
    const toggleLike=(id)=>{
        setMovies((movies)=>movies.map((movie)=>movie.id===id ? {...movie,liked:!movie.liked} : movie));
    }
    return(
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Movie App</h1>
                <p className="text-muted">Recherche et gestion de vos films préférés</p>
            </div>
            <div className="row mb-4">
                <div className="col-md-8 mx-auto">
                    <input type="text" className="form-control" placeholder="Rechercher un film..." value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
            </div>   
            <div className="card shadow-sm mb-5">
                <div className='card-body'>
                    <h5 className="fw-bold mb-3">Filtres par catégorie</h5>
                    <div className="d-flex flex-wrap gap-4">
                        {categories.map((cat)=>(
                            <div className="form-check" key={cat}>
                                <input className="form-check-input" type="radio" name="category" value={cat} checked={category === cat}
                                onChange={(e)=>setCategory(e.target.value)}/>
                                <label className='from =-check-label'>{cat}</label>
                                </div> ))}

                    </div>
                </div>

            </div>
            <div className='d-flix justify-content align-items-center mb-4'>
                <span className='badge bg-primary fs-6'>
                            {filteredMovies.length} film(s)
                </span>
            </div>
        <div className='row g-4'>
                {filteredMovies.length > 0 ?(
                filteredMovies.map((movie) =>(
                    <MovieCard
                    key={movie.id}
                    movie={movie}
                    onDelete={deleteMovie}
                    onLike={toggleLike}/>
                ))
            ):(
                <div className='col-12' >
                    <div className='alert alert-warning text-center'>
                        Aucun film trouvé.
                    </div>
                </div>
            )}
 </div>
 </div>
        );
    }
export default MovieList;