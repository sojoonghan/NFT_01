import React from 'react'
import "../styles/Market.css"
import { Link } from 'react-router-dom'

const Market = () => {
    return (
        <>
            <div className="body">
                <div className="navbar">
                </div>

                <img className="hero_header" src={require('../img/logo.jpg')} alt={'header'} />
                <h1>--Our new Artist--</h1>
                <div className="products">
                    <Link to='/artist/a'>
                        <img src={require('../img/a.jpg')} alt={'A'} />
                        <p>artist A</p>
                        <p className="price">3 ETH</p>
                    </Link>
                    <Link to={'/artist/b'}>
                        <img src={require('../img/b.jpg')} alt={'B'} />
                        <p>artist B</p>
                        <p className="price">2 ETH</p>
                    </Link>
                    <Link to="/artist/c">
                        <img src={require('../img/c.jpg')} alt={"c"} />
                        <p>artist C</p>
                        <p className="price">6 ETH</p>

                    </Link>
                    <Link to='/artist/d'>
                        <img src={require('../img/d.jpg')} alt={'D'} />
                        <p>artist D</p>
                        <p className="price">9 ETH</p>

                    </Link >
                    <Link to='/artist/e'>
                        <img src={require('../img/e.jpg')} alt={'E'} />
                        <p>artist E</p>
                        <p className="price">5 ETH</p>
                    </Link>
                    <Link to='/artist/f'>
                        <img src={require('../img/f.jpg')} alt={'F'} />
                        <p>artist F</p>
                        <p className="price">10 ETH</p>
                    </Link>
                    <Link to='/artist/g'>
                        <img src={require('../img/g.jpg')} alt={'G'} />
                        <p>arist G</p>
                        <p className="price">6 ETH</p>
                    </Link>
                    <Link to='/artist/h'>
                        <img src={require('../img/h.jpg')} alt={'H'} />
                        <p>artist I</p>
                        <p className="price">2 ETH</p>
                    </Link>
                    <Link to='/artist/i'>
                        <img src={require('../img/i.jpg')} alt={'I'} />
                        <p>artist F</p>
                        <p className="price">7 ETH</p>
                    </Link>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    )
}

export default Market