import { Link } from 'react-router-dom';
import React  from 'react';
import './Navbar.css';

const Navbar : React.FC = () =>{
    return (
        
            <nav className='Navbar'>
                <ul className='nav-ul'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create-blog" >Create Blog</Link>
                    </li>
                    <li>
                        <Link to="/login">Login/ SignUp</Link>
                    </li>
                </ul>
            </nav>
        
    );
}

export default Navbar;