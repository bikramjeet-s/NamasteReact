import {useState} from 'react';

const User =(props) => {
    const [count,setCount] = useState(0);
    const{name, location} = props;
    const handleClick = () =>{
        setCount(count+1);
    }
    return (
        <div className ="user-card">
            <h1>Count : {count}</h1>
            <button onClick={handleClick}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact Info: bikram@gmail.com</h3>
        </div>
    )
}

export default User;