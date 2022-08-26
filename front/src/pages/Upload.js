import React from 'react'

const Upload = (props) => {
    return (
        <><section>
            {props.imgUrl && <img src={props.imgUrl} width='600px' />}
        </section></>
    )
}

export default Upload