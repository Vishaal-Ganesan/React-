import { TextField,Icon, Card, CardContent, Typography, AppBar, Stack, createTheme, ThemeProvider, CardMedia } from '@mui/material'
import React from 'react'
import '../App.css'
import {restaurants} from './constants/data';
import { tyTheme, tyThemeLight } from './themes/Typographytheme';

const FoodCard = () => {
  const RES_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const getCuisineName = (cuisine)=>{
      console.log("Cuisine : ",cuisine);
      return cuisine.length > 35 ? cuisine.substring(0,35)+'...':cuisine
  }

  return (
    <div className='food-cards'>
      <ThemeProvider theme={tyTheme}>
        <Stack direction='row' flexWrap='wrap'>
          {restaurants.map((restaurant)=>(
              <Card className='main-card' elevation='0' sx={{minWidth:200,marginTop:'100px',marginLeft:12.5,maxWidth:450,borderRadius:10,background:'white'}}>
              <CardMedia component='img'
              sx={{width:'360px',height:'200px',objectFit:'cover'}}
              image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`}/>
              <CardContent>
                {/* <img style={{width:'360px',height:'200px',objectFit:'cover',borderRadius:20}} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`} alt={restaurant?.info?.name} /> */}
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

export default FoodCard