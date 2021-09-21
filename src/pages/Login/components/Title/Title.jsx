import React from 'react'
import './Title.css'

const Title = ({text}) => {
    return(
        <div className='title__container'>
            <label className='title__label'>
            {text}
            </label>
        </div>
    )
}

export default Title