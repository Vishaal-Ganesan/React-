import { TextField,Icon, Card, CardContent, Typography, AppBar, Stack, createTheme, ThemeProvider, CardMedia, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../App.css'
import {CORS_URL, MAIN_PAGE_DATA} from './constants/data';
import { tyTheme, tyThemeLight } from './themes/Typographytheme';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';

const FoodCard = () => {
  const RES_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const [restaurants,setRestaurants] = useState([]);


  useEffect(async () => {
    const respData  = await axios.get(`${CORS_URL}${MAIN_PAGE_DATA}`)
    console.log("respDAta:",respData);
    console.log(respData?.data.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurants(respData?.data.data.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }, [])
  

  return (
          <>
            <RestaurantCard restaurants={restaurants} flexwrap={false} sideScroll={true}/>
            <Divider/>
            <RestaurantCard restaurants={restaurants} flexwrap/> 
           </>
  )
}


export default FoodCard