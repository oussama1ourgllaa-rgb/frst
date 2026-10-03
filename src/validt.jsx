import { useState } from "react";

const ValidationFormV2 = () => {
  const villes = ["Agadir", "Rabat", "Casablanca", "Safi"];
 

  const Listhobbies=["lecture","sport","shopping"];

  // Variables d'état
  const [formData,setFormData]=useState({nom:"",prenom:"",email:"",gender:"",ville:"",display:false,hobbies:[]});
  const [errors, setErrors] = useState({});
//
const handelChange=(e)=> {
   const{name,value}=e.target;
   /*const name=e.target.name;
   const value=e.target.value;
  */
 setFormData(prev=>({...prev,name:value}));
  //setFormData(prev=>({...prev,[name]:value}));
 console.log(formData);

}


  //handel change hobbies
  const handleHobbyChange = (e) => { 
    const value = e.target.value; 
    const checked = e.target.checked; 
    //const{value,checked}=e.target;
     console.log(hobbies);
    if (checked) {
        let copy=[...hobbies];
        copy.push(value);
        setHobbies(copy);
       // setHobbies([...hobbies, value]);
       
        } 
    else {
         let newHobbies=hobbies.filter((item) => item !== value);
        /*
          let newHobbies=[];
          hobbies.forEach((item,pos)=>{
            if(item !== value){
            newHobbies.push(item);
            }})


        */
        setHobbies(newHobbies); 
    //setHobbies(hobbies.filter((item) => item !== value));
    } 



   
                                };
  // Fonction de validation
  const validate = () => {
    let res = {};
 console.log(formData);
    // Validation du nom
    if (nom.trim() === "") {
      res["nom"] = "Le nom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(nom.trim())) {
      res["nom"] = "Le nom est invalide !!!!";
    }

    // Validation du prénom
    if (prenom === "") {
      res["prenom"] = "Le prénom est obligatoire !!!!";
    } else if (!/^[a-zA-Z]{2,}$/.test(prenom)) {
      res["prenom"] = "Le prénom est invalide !!!!";
    }

    // Validation du genre
    if (gender === "") {
      res["gender"] = "Le genre est obligatoire !!!!";
    }

    // Validation de la ville
    if (ville === "") {
      res["ville"] = "La ville est obligatoire !!!!";
    }

    // Validation de l'email
    if (email === "") {
      res["email"] = "L'email est obligatoire !!!!";
    } else if (!email.includes("@")) {
      res["email"] = "L'email est invalide !!!!";
    }
    //validation des hobbies
    if (hobbies.length === 0) { 
        res["hobbies"] = "Selectionner au moins un hobby"; 
    }

    return res;
    
  };

  // Soumission du formulaire
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // On récupère les erreurs dans une variable
    const result = validate();

    // On met à jour l'état errors => re ender componenet
    setErrors(result);

    console.log(result);

    // On utilise result et non errors
    if (Object.keys(result).length === 0) {
      setDisplay(true);
    }
    else{
        setDisplay(false);
    }
  };

  return (
    <div className="container my-5 p-3 text-start">

      <form onSubmit={handelSubmit}>

        {/* Nom */}
        <div className="mb-3">
          <label htmlFor="nom">Nom</label>

          <input
            type="text"
            id="nom"
            name="nom"
            className="form-control"
            value={formData.nom}
            onChange={handelChange}
          />

          <span className="text-danger">
            {errors.nom}
          </span>
        </div>


        {/* Prenom */}
        <div className="mb-3">
          <label htmlFor="prenom">Prénom</label>

          <input
            type="text"
            id="prenom"
            name="prenom"
            className="form-control"
            value={formData.prenom}
            onChange={handelChange}
          />

          {
            errors.prenom&&(<span className="text-danger">{errors.prenom}</span>)
          }
        </div>


        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handelChange}
          />

          <span className="text-danger">
            {errors.email}
          </span>
        </div>


        {/* Gender */}
        <div className="mb-3">

          <label>Genre</label>
           <div className="form-check mb-3">

      

          <input
            type="radio"
            name="gender"
            value="male"
            className="form-check-input"
            checked={formData.gender === "male"}
            onChange={handelChange}
          />

          <label className="form-check-label">Male</label>
         </div>
           <div className="form-check mb-3">
          <input
            type="radio"
            name="gender"
            value="female"
            className="form-check-input"
            checked={formData.gender === "female"}
            onChange={handelChange}
          />

           <label className="form-check-label">Female</label>
         </div>
      

          <span className="text-danger">
            {errors.gender}
          </span>

        </div>


        {/* Ville */}
        <div className="mb-3">

          <label htmlFor="ville">Ville</label>

          <select
            id="ville"
            name="ville"
            value={formData.ville}
            className="form-select"
            onChange={handelChange}
          >

            <option value="">
              Choisir une ville ...
            </option>

            {villes.map((v, pos) => (
              <option key={pos} value={v}>
                {v}
              </option>
            ))}

          </select>

          <span className="text-danger">
            {errors.ville}
          </span>

        </div>

        {/*Hobbies */}
        <div className="mb-3">
        <label className="form-label">Hobbies :</label> 
        {Listhobbies.map((hobby,pos) => ( 
          <div className="form-check" key={pos}>
              <input type="checkbox" className="form-check-input"  value={hobby} checked={formData.hobbies.includes(hobby)} 
                  onChange={handleHobbyChange} /> 
               <label className="form-check-label">{hobby}</label>   
                  </div>
                  
                  
                  
                   )
        )}



         <p className="text-danger">
            {errors.hobbies}
          </p>
</div>
        {/* Bouton */}
        <div className="mb-3">

          <button
            type="submit"
            className="btn btn-primary"
          >
            Envoyer
          </button>

        </div>

      </form>


      {/* Affichage des informations */}
      {display && (
        <div className="my-3 mx-5">

          <h4>Informations saisies :</h4>

          <ul>
            <li>Nom : {formData.nom}</li>
            <li>Prénom : {formData.prenom}</li>
            <li>Email : {formData.email}</li>
            <li>Gender : {formData.gender}</li>
            <li>Ville : {formData.ville}</li>
            <li>Hobbies : {formData.hobbies.join()}</li>
          </ul>

        </div>
      )}

    </div>
  );
};

export default ValidationFormV2;
