import React from 'react'
import '../styles/Artist.css'
const E = () => {
    const onOder = () => {

    }
    return (
        <>
            <section >
                <div className='div'>
                </div>
                <div className='container'>
                    <img src={require('../img/e.jpg')} alt={'E'} className='item' />
                    <div className='item-price'>
                        <p>Artist name : E</p>
                        <p >5 ETH</p>
                    </div>
                    <button onClick={onOder} className='btn'>구매</button>
                </div>
            </section>
        </>

    )
}

export default E