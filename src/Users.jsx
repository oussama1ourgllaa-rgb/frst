import {useState,useEffect} from "react";
import UserCard from "./UserCard.jsx";

const Users = () => {
    const [Listu,setListu] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data=>{setListu(data);console.log(data)});},[]);

    return (
        <div>
            <h1>nomber : {Listu.length}</h1>
            {
            Listu.map((u,pos) => 
                <UserCard key={u.id} u={u} />
            )

            }
        </div>
    )
}
export default Users;