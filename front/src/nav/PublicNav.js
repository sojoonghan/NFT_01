import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {
    return (
        <>
            <nav id='navbar'>
                <div>
                    <Link className="navbar-logo" to="/">NFTStation</Link>
                </div>
                <ul className="navbar-menu">
                    <li className='navbar-item' >
                        <Link to="/login" className='navbar-links'>LOGIN</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav