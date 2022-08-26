import React from 'react'
import '../styles/Artist.css'
const G = () => {
    const onOder = () => {

    }
    return (
        <>
            <section >
                <div className='div'>
                </div>
                <div className='container'>
                    <img src={require('../img/g.jpg')} alt={'G'} className='item' />
                    <div className='item-price'>
                        <p>Artist name : G</p>
                        <p >6 ETH</p>
                    </div>
                    <button onClick={onOder} className='btn'>구매</button>
                </div>
            </section>
        </>

    )
}

export default G