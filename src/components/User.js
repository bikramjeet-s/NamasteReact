import {useState, useEffect} from 'react';

const User =(props) => {
    const [count,setCount] = useState(0);
    const [userInfo,setUserInfo] = useState({name : "Funcitonal", location : "Chnadigarh"});
    const handleClick = () =>{
        setCount(count+1);
    }

    async function fetchData() {
        const data = await fetch("https://api.github.com/users/bikramjeet-s");
        const jsonData = await data.json()
        setUserInfo(jsonData)
        console.log(userInfo)
    }

    useEffect(()=>{fetchData();
        console.log("effect called")

        return ()=>{
            console.log("Hello")
        }
    }
        ,[count]
    )

    const {login,created_at,avatar_url} = userInfo
    return (
        <div className ="user-card">
            <h1>Count : {count}</h1>
            <button onClick={handleClick}>Count Increase</button>
            <img src={avatar_url}/>
            <h2>Name: {login}</h2>
            <h3>Location: {created_at}</h3>
            <h3>Contact Info: bikram@gmail.com</h3>
        </div>
    )
}

export default User;