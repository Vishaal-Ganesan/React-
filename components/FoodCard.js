import { TextField,Icon, Card, CardContent, Typography, AppBar, Stack, createTheme } from '@mui/material'
import React from 'react'
import '../App.css'
import data from './'

const FoodCard = () => {
  return (
    <div className='food-cards'>
        <Stack direction='row' flexWrap='wrap'>
          <Card sx={{minWidth:200,marginTop:'100px'}}>
            <CardContent>
              <img style={{width:450}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uvey2fbfg7zwahbtxixs" alt="biriyni" />
              <Typography>The Biryani Mall</Typography>
              <Typography>⭐4.3 . 20mins</Typography>
              <Typography>Biryani</Typography>
              <Typography>Coimbatore</Typography>
            </CardContent>
          </Card>

          {/* <Card sx={{minWidth:300,marginTop:'100px'}}>
            <CardContent>
              <img style={{width:450}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uvey2fbfg7zwahbtxixs" alt="biriyni" />
              <Typography>The Biryani Mall</Typography>
              <Typography>⭐4.3 . 20mins</Typography>
              <Typography>Biryani</Typography>
              <Typography>Coimbatore</Typography>
            </CardContent>
          </Card>
          <Card sx={{minWidth:300,marginTop:'100px'}}>
            <CardContent>
              <img style={{width:450}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uvey2fbfg7zwahbtxixs" alt="biriyni" />
              <Typography>The Biryani Mall</Typography>
              <Typography>⭐4.3 . 20mins</Typography>
              <Typography>Biryani</Typography>
              <Typography>Coimbatore</Typography>
            </CardContent>
          </Card>
          <Card sx={{minWidth:300,marginTop:'100px'}}>
            <CardContent>
              <img style={{width:400}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uvey2fbfg7zwahbtxixs" alt="biriyni" />
              <Typography>The Biryani Mall</Typography>
              <Typography>⭐4.3 . 20mins</Typography>
              <Typography>Biryani</Typography>
              <Typography>Coimbatore</Typography>
            </CardContent>
          </Card>
          <Card sx={{minWidth:300,marginTop:'100px'}}>
            <CardContent>
              <img style={{width:400}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uvey2fbfg7zwahbtxixs" alt="biriyni" />
              <Typography>The Biryani Mall</Typography>
              <Typography>⭐4.3 . 20mins</Typography>
              <Typography>Biryani</Typography>
              <Typography>Coimbatore</Typography>
            </CardContent>
          </Card>
          <Card sx={{minWidth:300,marginTop:'100px'}}>
            <CardContent>
              <img style={{width:400}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uvey2fbfg7zwahbtxixs" alt="biriyni" />
              <Typography>The Biryani Mall</Typography>
              <Typography>⭐4.3 . 20mins</Typography>
              <Typography>Biryani</Typography>
              <Typography>Coimbatore</Typography>
            </CardContent>
          </Card>
           */}
          </Stack>

    </div>
  )
}

export default FoodCard