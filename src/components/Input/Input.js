import React, { lazy, Suspense, useRef } from 'react'
import './Input.scss'

const InputLabel = lazy(() => import('@mui/material/InputLabel'))
const TextField = lazy(() => import('@mui/material/TextField'))


const Input = ({ textarea, name, label, type, placeholder, required, disabled, onChange }) => {
    const correctPlaceholder = required ? `${placeholder}*` : placeholder

    const inputRef = useRef(null)

    return (
        <div className={`input field ${!!textarea ? 'textarea' : ''}`}>
            <Suspense fallback={null}>

                {label && <InputLabel>{label}</InputLabel>}

                <TextField aria-label={placeholder} inputRef={inputRef} onChange={(e) => onChange(inputRef.current?.value)} multiline={!!textarea} rows={!!textarea ? '4' : ''} style={{
                    '&:hover fieldset': {
                        borderColor: 'grey',
                    },
                }} className='custom-input' variant={'standard'} name={name} type={type} placeholder={correctPlaceholder} required={required} disabled={disabled} />
            </Suspense>
        </div>
    )
}

export default Input