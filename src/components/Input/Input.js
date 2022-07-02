import { InputLabel, TextField } from '@mui/material'
import React from 'react'
import './Input.scss'

const Input = ({ textarea, name, label, type, placeholder, required, disabled }) => {
    const correctPlaceholder = required ? `${placeholder}*` : placeholder

    return (
        <div className={`input field ${!!textarea ? 'textarea' : ''}`}>

            {label && <InputLabel>{label}</InputLabel>}

            <TextField multiline={!!textarea} rows={!!textarea ? '4' : ''} style={{
                '&:hover fieldset': {
                    borderColor: 'grey',
                },
            }} className='custom-input' variant={'standard'} name={name} type={type} placeholder={correctPlaceholder} required={required} disabled={disabled} />
        </div>


    )
}

export default Input