import { useState } from 'react';
const Books=()=>{
const [listBooks,setListBooks]=useState([{isbn: "9780132350884",title: "Clean Code", image: "/images/clean-code.jpg", likes: 10,}, { isbn: "9780201633610", title: "Design Patterns", image: "/images/design-patterns.jpg", likes: 5, }, { isbn: "9781491950357", title: "Learning React", image: "/images/learning-react.jpg", likes: 8, }, ]);
const [term,setTerm]=useState('');

const handelLike=(isbn)=>{
 let newVersion= listBooks.map(b=>b.isbn===isbn?{...b,likes:b.likes+1}:b);
 setListBooks(newVersion);
}

const handelDelete=(pos)=>{
    let copy=[...listBooks]
    copy.splice(pos,1);
    setListBooks(copy);
}

const handelChange=(e)=>{
   setTerm(e.target.value);
}

const filtredList=listBooks.filter((b,pos)=>b.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));

    return(
      <div className="container my-3 mx-4">
        <h1>Liste des livres</h1>
        <input type="text" onChange={handelChange} className="form-control mb-3" placeholder="Rechercher un livre..." />
        <div className="row">
            {
                filtredList.map((b,pos)=>
                    <div className="col-4 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={b.image}/>
                            <div className="card-body text-center">
                                <p>{b.title}</p>
                                <p>{b.isbn}</p>
                                <p>Likes: {b.likes}</p>
                                <button className="btn btn-primary" onClick={() => handelLike(b.isbn)}>Like</button>
                                <button className="btn btn-danger" onClick={() => handelDelete(pos)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
      </div>
    )
}
export default Books;