import { TextField,Icon, Card, CardContent, Typography, AppBar, Stack, createTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import '../App.css'
import FoodCard from './FoodCard';

const BodyApp = () => {


  const theme = createTheme({
    borderColor:{
      
    }
  })
  return (
    <div>
      
      <div className='search-bar'>
        <TextField 
        // sx={{width:{md:'940px',sm:'300px'} }}
        color='warning'
        variant='outlined'
        placeholder='Search for cities and restaurants'
        InputProps={{
            style:{
              borderRadius:20,
            },
            endAdornment:<Icon><SearchIcon/></Icon>
        }}/>
      </div>
      <FoodCard/>
    </div>


  )
}

export default BodyApp