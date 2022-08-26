import React from 'react'
import '../styles/Artist.css'
const F = () => {
    const onOder = () => {

    }
    return (
        <>
            <section >
                <div className='div'>
                </div>
                <div className='container'>
                    <img src={require('../img/f.jpg')} alt={'F'} className='item' />
                    <div className='item-price'>
                        <p>Artist name : F</p>
                        <p >10 ETH</p>
                    </div>
                    <button onClick={onOder} className='btn'>구매</button>
                </div>
            </section>
        </>

    )
}

export default F