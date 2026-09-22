import { useState } from "react";

const ValidationForm=()=>{
    const villes=["Agadir",'Rabat','Casablanca','Safi'];

    const[nom,setNom]=useState("");
    const[prenom,setPrenom]=useState("");
    const[email,setEmail]=useState("");
    const[gender,setGender]=useState("");
    const[ville,setVille]=useState("");
    const[display,setDisplay]=useState(false);
    const[errors,setErrors]=useState({});

const validate=()=>{
    let res={};
    if(nom==="")res["nom"]="le nom est obligatoire !!!!";
    else if(!/^[a-zA-Z]{2}/.test(nom))res["nom"]="le nom est invalide !!!!";

    if(gender==="")res["gender"]="le gender est obligatoire !!!!";
    if(ville==="")res["ville"]="la ville est obligatoire !!!!";
    if(email==="")res["email"]="l email est obligatoire !!!!";
    else if(!email.includes("@"))res["email"]="l email est invalide !!!!";
    return res;
}

const handelSubmit=(e)=>{
    e.preventDefault();
    setErrors(validate());
    console.log(errors);
    
    if(Object.keys(errors).length===0)
        setDisplay(true);
}

return(
    <div className="container my-5 p-3 text-start">
        <form onSubmit={handelSubmit}>
            <div className="mb-3 text-start">
                <label htmlFor="nom">Nom</label>
                <input type="text" className="form-control" id="nom" value={nom} onChange={(e)=>setNom(e.target.value)} />
                {errors.nom && <span className="text-danger">{errors.nom}</span>}
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="prenom">Prénom</label>
                <input type="text" className="form-control" id="prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
                {errors.prenom && <span className="text-danger">{errors.prenom}</span>}
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="gender">Gender</label>
                <select className="form-control" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="">Select a gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && <span className="text-danger">{errors.gender}</span>}
            </div>
            <div className="mb-3 text-start">
                <label htmlFor="ville">Ville</label>
                <select className="form-control" id="ville" value={ville} onChange={(e)=>setVille(e.target.value)}>
                    <option value="">Select a city</option>
                    {villes.map((ville,index)=><option key={index} value={ville}>{ville}</option>)}
                </select>
                {errors.ville && <span className="text-danger">{errors.ville}</span>}
            </div>
            <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>

        </form>


{
    display && (
    <div className="my-3 mx-5 p-3 border border-success">
        <ul>
            <li>Nom: {nom}</li>
            <li>Prénom: {prenom}</li>
            <li>Email: {email}</li>
            <li>Gender: {gender}</li>
            <li>Ville: {ville}</li>
        </ul>
    </div>
    )
}
</div>
)
}   
export default ValidationForm;
