import React from 'react'
import '../styles/Artist.css'
const I = () => {
    const onOder = () => {

    }
    return (
        <>
            <section >
                <div className='div'>
                </div>
                <div className='container'>
                    <img src={require('../img/i.jpg')} alt={'I'} className='item' />
                    <div className='item-price'>
                        <p>Artist name : I</p>
                        <p >7 ETH</p>
                    </div>
                    <button onClick={onOder} className='btn'>구매</button>
                </div>
            </section>
        </>

    )
}

export default I