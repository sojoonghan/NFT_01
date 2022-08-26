import React from 'react'
import '../styles/Artist.css'
const A = () => {

    const onOder = () => {

    }
    return (
        <>
            <section >
                <div className='div'>
                </div>
                <div className='container'>
                    <img src={require('../img/a.jpg')} alt={'A'} className='item' />
                    <div className='item-price'>
                        <p>Artist name : A</p>
                        <p >2 ETH</p>
                    </div>
                    <button onClick={onOder} className='btn'>구매</button>
                </div>
            </section>
        </>

    )
}

export default A