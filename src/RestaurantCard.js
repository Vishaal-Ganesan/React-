import { TextField,Icon, Card, CardContent, Typography, AppBar, Stack, createTheme, ThemeProvider, CardMedia, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../App.css'
import {CORS_URL, MAIN_PAGE_DATA} from './constants/data';
import { tyTheme, tyThemeLight } from './themes/Typographytheme';
import axios from 'axios';


const RestaurantCard = (props) => {
    const {restaurants,flexwrap,sideScroll}=props
    const getCuisineName = (cuisine)=>{
        console.log("Cuisine : ",cuisine);
        return cuisine.length > 35 ? cuisine.substring(0,35)+'...':cuisine
    }
  
  return (
    <div className='food-cards'>
    <div className='scroll-btn'>
    
        <Button>right</Button>
    </div>
       <ThemeProvider theme={tyTheme}> 
        <Stack direction='row' flexWrap={flexwrap?'wrap':''} sx={{paddingTop:5}}>
          {restaurants?.map((restaurant)=>(
              <Card className='main-card' elevation='0' sx={{minWidth:200,marginTop:'130px',marginLeft:12.5,maxWidth:450,borderRadius:10,background:'white'}}>
              <CardMedia component='img'
              sx={{width:'360px',height:'200px',objectFit:'cover'}}
              image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`}/>
              <CardContent>
                <Typography sx={{fontSize:22,fontWeight:'bold'}} className='main-hotelName'>{restaurant?.info?.name}</Typography>
                <Typography sx={{fontSize:19,fontWeight:'bold'}}><span style={{padding:2,borderRadius:'50%'}}>⭐</span>{restaurant?.info?.avgRating} • {restaurant?.info?.sla?.slaString}</Typography>

                <ThemeProvider theme={tyThemeLight}>
                <Typography sx={{fontSize:18}}>
                  {getCuisineName(restaurant?.info?.cuisines.join(','))}
                </Typography>
                <Typography sx={{fontSize:18}}>Coimbatore</Typography>
                </ThemeProvider>
              </CardContent>
            </Card>  
          ))}
          </Stack>
          </ThemeProvider> 
          
          
    </div>
  )
}

export default RestaurantCard