import { TextField } from '@mui/material'
import React from 'react'
import './Input.scss'

const Input = ({ name, type, placeholder, required, disabled }) => {
    const correctPlaceholder = required ? `${placeholder}*` : placeholder

    return (
        <TextField className='custom-input' variant={'standard'} name={name} type={type} placeholder={correctPlaceholder} required={required} disabled={disabled} />
    )
}

export default Input