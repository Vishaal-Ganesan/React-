import { TextField,Icon } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import '../App.css'

const BodyApp = () => {
  return (
    <div className='search-bar'>
        <TextField 
        sx={{width:{md:'500px',sm:'200px'}}}
        variant='outlined'
        placeholder='Search for cities and restaurants'
        InputProps={{
            endAdornment:<Icon><SearchIcon/></Icon>
        }}/>
    </div>
  )
}

export default BodyApp