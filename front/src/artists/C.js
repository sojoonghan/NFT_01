import React from 'react'

const C = () => {
    const onOder = () => {

    }
    return (
        <>
            <section >
                <div className='div'>
                </div>
                <div className='container'>
                    <img src={require('../img/c.jpg')} alt={'C'} className='item' />
                    <div className='item-price'>
                        <p>Artist name : I</p>
                        <p >6 ETH</p>
                    </div>
                    <button onClick={onOder} className='btn'>구매</button>
                </div>
            </section>
        </>

    )
}

export default C