import React, { lazy, Suspense, useEffect, useState } from 'react'
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import './Dropdown.scss'

const FormControl = lazy(() => import('@mui/material/FormControl'))
const InputLabel = lazy(() => import('@mui/material/InputLabel'))
const MenuItem = lazy(() => import('@mui/material/MenuItem'))
const Select = lazy(() => import('@mui/material/Select'))

const Dropdown = ({ items, isCountries, name, required, label, onChange }) => {

    const [value, setValue] = useState('')

    const labelName = `${name}-label`

    useEffect(() => {
        onChange(value)
    }, [value, onChange])

    return (
        <div className='dropdown field'>
            <Suspense fallback={null}>
                <FormControl aria-label={label} name={name} required={required} fullWidth variant="standard" sx={{
                    m: 1, minWidth: 120, '& .MuiPaper-root': {
                        maxHeight: "100px"
                    }
                }} >
                    <InputLabel id={labelName}>{label}</InputLabel>

                    <Select onChange={({ target }) => setValue(target.value)} value={value} label={label} id={name} labelId={labelName}>

                        {items.map(item => <MenuItem key={item.value} value={item.value}>
                            {isCountries && <img className='flag' src={`https://flagcdn.com/w20/${item.value.toLowerCase()}.png`} onError={(e) => e.target.classList.add('error')} alt={`${item.label}`} />}{item.label}

                        </MenuItem>)}

                    </Select>
                </FormControl>
            </Suspense>
        </div>
    )
}

export default Dropdown