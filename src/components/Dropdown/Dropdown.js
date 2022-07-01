import React from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'
import './Dropdown.scss'


const Dropdown = ({ items, isCountries }) => {
    return (
        <div className='dropdown'>

            <FormControl  fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>

                <Select  id="industry-dropdown" labelId="industry-label">

                    {items.map(item => <MenuItem disableAnimations key={item.value} value={item.value}>
                        {isCountries && <img className='flag' src={`https://flagcdn.com/w20/${item.value.toLowerCase()}.png`} alt="..." />}{item.label}

                    </MenuItem>)}

                </Select>
            </FormControl>
        </div>
    )
}

export default Dropdown