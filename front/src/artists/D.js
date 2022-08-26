import React from 'react'
import '../styles/Artist.css'
const D = () => {
    const onOder = () => {

    }
    return (
        <>
            <section >
                <div className='div'>
                </div>
                <div className='container'>
                    <img src={require('../img/d.jpg')} alt={'D'} className='item' />
                    <div className='item-price'>
                        <p>Artist name : D</p>
                        <p >9 ETH</p>
                    </div>
                    <button onClick={onOder} className='btn'>구매</button>
                </div>
            </section>
        </>

    )
}

export default D