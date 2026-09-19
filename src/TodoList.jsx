import { useState,useEffect } from "react";
const TodoList = () => {
        const [todos,setTodos] = useState([]);
        const [title,setTitle] = useState("");
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data=>{console.log(data.slice(0,10));setTodos(data.slice(0,10));});},[])

    const deleteTodo = (id) => {
        setTodos(todos.filter(t=>t.id !== id));
    }

    const ToggleStatus = (id) => {
        let newTodos = todos.map((todo,pos) => todo.id === id ? {...todo,completed:!todo.completed} : todo)
        setTodos(newTodos);
    }

    const handelChange = (e) => {
        setTitle(e.target.value);
    }

    const addTodo = () => {
        if(title==="") return;
        let newTodo = {id:Date.now(),title:title,completed:false};
        setTodos([...todos,newTodo]);
        setTitle("");
    }   

    return (
        <div className="container mt-5">
            <div className="w-50 d-flex gap-2 max-auto my-3">
                <input type="text" onChange={handelChange} className="flix-grow-1" value={title}/>
                <button className="btn btn-sm btn-primary" onClick={addTodo}>Add Todo</button>
            </div>
            <ul className="list-group w-75 shadow mx-auto">
                {
                    todos.map((todo,pos)=>
                        <li className="list-group-item d-flix justify-coutent-between">
                            <span style={{textDecoration:todo.completed?"line-through":"none"}} onClick={()=>{ToggleStatus(todo.id)}}>
                                {todo.title}
                            </span>
                            <button className="btn btn-sm btn-danger" onClick={()=>{deleteTodo(todo.id);}}>Supprimer</button>
                        </li>
                )
                }

            </ul>
        </div>
    )
}
export default TodoList;