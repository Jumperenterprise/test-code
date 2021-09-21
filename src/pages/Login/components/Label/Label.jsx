import React from 'react'
import './Label.css'

function Label({ text }) {
    return (
        <div className="label__container--style">
            {text}
        </div>
    )
}

export default Label
