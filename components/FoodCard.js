import { TextField,Icon, Card, CardContent, Typography, AppBar, Stack, createTheme } from '@mui/material'
import React from 'react'
import '../App.css'
import {restaurants} from './constants/data';

const FoodCard = () => {
  const RES_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className='food-cards'>
        <Stack direction='row' flexWrap='wrap'>
          {restaurants.map((restaurant)=>(
              <Card sx={{background:'grey',minWidth:200,marginTop:'100px',marginLeft:8.5}}>
              <CardContent>
                <img style={{width:'330px',height:'200px',objectFit:'cover',borderRadius:10}} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.info?.cloudinaryImageId}`} alt={restaurant?.info?.name} />
                <Typography sx={{fontSize:20,fontWeight:'bold'}}>{restaurant?.info?.name}</Typography>
                <Typography sx={{fontSize:20,fontWeight:'bold'}}><span style={{padding:2,borderRadius:'50%'}}>⭐</span>{restaurant?.info?.avgRating} • {restaurant?.info?.sla?.slaString}</Typography>
                <Typography sx={{fontSize:20,fontWeight:'lighter'}}>{restaurant?.info?.cuisines?.map((cuisine,index)=>{
                  return <span key={index}>{index===0 || index === restaurant?.info?.cuisines.length-1? '':','}{cuisine}</span>
                })}</Typography>
                <Typography sx={{fontSize:20,fontWeight:'lighter'}}>Coimbatore</Typography>
              </CardContent>
            </Card>  
          ))}
          </Stack>

    </div>
  )
}

export default FoodCard