import {usestate} from "react";
const Form = () => {
    const[nom,setNom] = useState('');
    const[prenom,setPrenom] = useState('');
    const[email,setEmail] = useState('');
    const[message,setMessage] = useState('');

    const handleSubmit = (e) => {
    }
    const handelChangeNom = (e) => {
        setNom(e.target.value);
    }
    const handelChangePrenom = (e) => {
        setPrenom(e.target.value);
    }
    const handelChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handelChangeMessage = (e) => {
        setMessage(e.target.value);
    }

        return (
            <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nom">Nom:</label>
                <input  id="nom" value={nom} onChange={handelChangeNom} />

                <label htmlFor="prenom">Prénom:</label>
                <input id="prenom" value={prenom} onChange={handelChangePrenom} />

                <label htmlFor="email">Email:</label>
                <input  id="email" value={email} onChange={handelChangeEmail} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={handelChangeMessage} />


                <button>Envoyer</button>
                
            </form>

            <ul>
                <li>Nom: {nom}</li>
                <li>Prénom: {prenom}</li>
                <li>Email: {email}</li>
                <li>Message: {message}</li>
            </ul>
            </>
        )
}

export default Form;