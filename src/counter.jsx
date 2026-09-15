import {useState} from 'react';

const Counter = () => {
    const [count,setCount] = useState(0)
    const incrementer = () => {
    setCount(prevCount => prevCount + 1);
        console.log(count);
    }
    const intiliser = () => {setCount(0);
    }
    return (
    <>
    <p>counter : {count}</p><br/>
    <button onClick={incrementer}>Incrementer</button>
    <button onClick={intiliser}>Initialiser</button>
    
    </>
    )
}

export default Counter;