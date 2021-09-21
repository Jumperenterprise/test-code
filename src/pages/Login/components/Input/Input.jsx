import React from 'react'
import './Input.css'

const Input = ({ attribute, handleChange, param}) => {
    return (
        <div className="mb-2" >
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type} 
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={ param ? 'form-control is-invalid' : 'form-control'}
            />
        </div>
    )
}

export default Input
