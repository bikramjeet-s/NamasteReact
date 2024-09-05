import logo from '../../logo.jpeg';
import {useState} from 'react';

const Header = () => {
    const [btnName,setbtnName] = useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={logo} style={{}} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                    <button className= 'login-btn' onClick = {() => {
                        setbtnName(btnName === "Login" ? "Logout" : "Login")
                    }}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;