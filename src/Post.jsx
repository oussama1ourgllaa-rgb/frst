import {useState} from "react";
function Post() {
        const[nomPost,setnomPost]=useState("post_Example");
        const[description,setdescription]=useState("Description du post");
        const[nomberLike,setnombreLike]=useState(0);
    const handleSubmit = (e) => {
        setnombreLike(nomberLike + 1);
    }   
    const handleSubmitDislike = (e) => {
        setnombreLike(nomberLike - 1);
    }
    return (
        <>
        <div>
            <h2 style={{ color: 'blue' ,padding: '100px' }}>{nomPost}</h2>
            <p style={{ color: 'red' ,padding: '10px' }}>{description}</p>
            <p>Nombre de likes: {nomberLike}</p>

            
            <button onClick={handleSubmit} style={{ backgroundColor: 'lightblue' }}>
                Like 
            </button>
            <button disabled={nomberLike <= 0} onClick={handleSubmitDislike} style={{ backgroundColor: 'lightcoral' }}>
                Dislike 
            </button>
        </div>
        </>
    )
}
export default Post;