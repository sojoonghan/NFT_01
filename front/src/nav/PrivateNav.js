import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

const PrivateNav = () => {
    return (
        <>
            <nav id='navbar'>
                <div>
                    <Link className="navbar-logo" to="/">NFTStation</Link>
                </div>
                <ul className="navbar-menu">
                    <li className='navbar-item'>
                        <Link to="/home" className='navbar-links'>HOME</Link>
                    </li>
                    {/* <li className='navbar-item'>
                        <Link to="/artist" className='navbar-links'>ARTIST</Link>
                    </li> */}
                    <li className='navbar-item'>
                        <Link to="/market" className='navbar-links'>MARKET</Link>
                    </li>
                    {/* <li className='navbar-item'>
                        <Link to="/ipfs" className='navbar-links'>Minting</Link>
                    </li> */}
                    <li className='navbar-item'>
                        <Link to="/wallet" className='navbar-links'>WALLET</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/logout" className='navbar-links'>LOGOUT</Link>
                    </li>
                </ul>
            </nav>
            <section className='navbar-section'>
                <div className='navbar-section-div'>
                </div>
                <div className='navbar-section-div'>
                </div>
            </section>
        </>
    )
}

export default PrivateNav