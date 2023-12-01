import { AppBar, Box, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import '../App.css';
const Header = () => {
  const menuItems = ['Home','About','Help','Sign In','Cart'];
  return(
    <div className='header'>
                <Box>
                  <AppBar sx={{background:'none'}} component='nav'>
                    <Toolbar className='appbar'>
                    <div className='feed-me'>
                    <img
                    src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg" 
                    alt="Feed me" 
                    className="logo"
                  />
                    <h4 style={{color:'black'}}>Feed-Me</h4>
                    </div>
                    <div className='menuItems'>
                    {menuItems.map((item)=>(
                      <ListItem key={item} disablePadding>
                        <ListItemButton sx={{background:'transparent','&:hover':{background:'none'}}} disableRipple>
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