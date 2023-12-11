import { AppBar, Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../App.css';
const Header = ({openDrawer,setOpenDrawer}) => {
  const menuItems = ['Home','About','Help','Sign In','Cart'];
  return(
    <div className='header'>
                <Box>
                  <AppBar sx={{background:'white'}} 
                  component='nav' 
                  // position='fixed'
                  >
                    <Toolbar className='appbar'>
                    <div className='feed-me'>
                    <img
                    src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg" 
                    alt="Feed me" 
                    className="logo"
                  />
                    <h4 style={{color:'black',cursor:'pointer'}} onClick={()=>setOpenDrawer(!openDrawer)}>Feed-Me</h4>
                    </div>
                    <div className='menuItems'>
                    {menuItems.map((item)=>(
                      <ListItem key={item} disablePadding>
                        <ListItemButton  sx={{background:'transparent','&:hover':{background:'none'}}} disableRipple>
                         {item === 'Cart' && <AddShoppingCartIcon sx={{font:'30px',color:'rgb(156, 156, 156)', '& .MuiListItemIcon-root':{width:0}}}/>}
                          <ListItemText primary={item} sx={{color:'black',whiteSpace:'nowrap',marginRight:'20px','&:hover':{color:'orange'},font:'20px'}}/>
                        </ListItemButton>
                      </ListItem>
                    ))}
                    </div>
                    </Toolbar>
                  </AppBar>
                </Box>
            
    </div>
)
}

export default Header