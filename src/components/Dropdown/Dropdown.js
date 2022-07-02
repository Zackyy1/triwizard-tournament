import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import './Dropdown.scss'


const Dropdown = ({ items, isCountries, name, required }) => {

    const label = `${name}${required ? '*' : ''}`
    const [value, setValue] = useState('')

    return (
        <div className='dropdown field'>

            <FormControl fullWidth variant="standard" sx={{
                m: 1, minWidth: 120, '& .MuiPaper-root': {
                    maxHeight: "100px"
                }
            }} >
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>

                <Select onChange={({target}) => setValue(target.value)} value={value} label={label} id="industry-dropdown" labelId="industry-label">

                    {items.map(item => <MenuItem key={item.value} value={item.value}>
                        {isCountries && <img className='flag' src={`https://flagcdn.com/w20/${item.value.toLowerCase()}.png`} alt="..." />}{item.label}

                    </MenuItem>)}

                </Select>
            </FormControl>
        </div>
    )
}

export default Dropdown