import { Button, Drawer, Icon, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SideDrawer = ({openDrawer,setOpenDrawer}) => {

  const API_TOKEN = "pk.507cabea64aa7483e818e34189568256";
  const [dimensions, setDimensions] = useState();

  useEffect(() => {
    if (dimensions) {
      axios
        .get(
          `https://us1.locationiq.com/v1/reverse.php?key=${API_TOKEN}&lat=${dimensions?.lat}&lon=${dimensions?.long}&format=json`,
          true,
        )
        .then((resp) => {
          console.log("Response: ", resp);
        });
    }
  }, [dimensions]);
 

  const success = (userLocObj) => {
    setDimensions({
      lat: userLocObj.coords.latitude,
      long: userLocObj.coords.longitude,
    });
    setOpenDrawer(!openDrawer)
  }

  const failure = ()=>{

  }
  const getUserLocation = ()=>{
    if(navigator.geolocation){
      console.log("location accessed");
      navigator.geolocation.getCurrentPosition(success,failure)
    }
  }
  return (
    <div>
        <Drawer anchor='left' open={openDrawer} onClose={()=>setOpenDrawer(false)}>
      <div className='close-drawer'><IconButton onClick={()=>setOpenDrawer(!openDrawer)}><CloseIcon/></IconButton></div>
        <TextField 
        sx={{width:{md:'400px',sm:'300px'},marginTop:'20px',padding:20}}
        variant='outlined'
        placeholder='Search for area,street name'
        InputProps={{
            endAdornment:<Icon> <SearchIcon/> </Icon>
        }}/>
        <Button  sx={{width:{md:'400px',sm:'300px'},marginLeft:20,marginTop:-15,color:'black',border:'1px solid black'}} 
         variant='outlined' startIcon={<GpsFixedIcon/>} onClick={()=>getUserLocation()}>
          Get current location<br/>Using GPS</Button>
        {/* </div> */}
        </Drawer>
    </div>
  )
}

export default SideDrawer