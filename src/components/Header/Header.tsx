import React from 'react';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../SearchBar/Searchbar';
import './Header.css';


const Header: React.FC= () =>{
    return (
        <header className='header'>
            <div className='logo'>
                <h2> Simple Blog App</h2>
            </div>
            <div className='searchbar'>
            <Searchbar />
            </div>
            <div className='Navbar'>
            <Navbar/>
            </div>
        </header>
    );
};

export default Header;
































/*
const Header: React.FC<HeaderProps> = () => {
    return (
        <header style={styles.headerContainer}>
            <nav style={styles.navContainer}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link to="/" style={styles.link}>Home</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/about" style={styles.link}>About</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/create-blog" style={styles.link}>Create Blog</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/login" style={styles.link}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    headerContainer: {
        backgroundColor: "#f8f9fa",
        padding: "10px 20px",
        borderBottom: "1px solid #e0e0e0",
    },
    navContainer: {
        display: "flex",
        justifyContent: "center",
    },
    navList: {
        listStyleType: "none",
        display: "flex",
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: "0 15px",
    },
    link: {
        textDecoration: "none",
        color: "#007bff",
        fontSize: "16px",
        fontWeight: "bold",
    },
};
*/

















// import React from "react";
// import { Link } from "react-router-dom";

// const Header: React.FC<Headers> = () => {
//     return (
//         <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1rem" }}>
//             {/* Logo Section */}
//             <div>
//                 <Link to="/">
//                     <img 
//                         src="/path-to-your-logo.png" 
//                         alt="Logo" 
//                         style={{ height: "50px" }} 
//                     />
//                 </Link>
//             </div>

//             {/* Navigation Section */}
//             <nav>
//                 <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
//                     <li style={{ margin: "0 1rem" }}>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li style={{ margin: "0 1rem" }}>
//                         <Link to="/about">About</Link>
//                     </li>
//                     <li style={{ margin: "0 1rem" }}>
//                         <Link to="/create-blog">Create Blog</Link>
//                     </li>
//                     <li style={{ margin: "0 1rem" }}>
//                         <Link to="/login">Login</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;
