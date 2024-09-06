import logo from '../../logo.jpeg';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    const [btnName,setbtnName] = useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={logo} style={{}} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
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