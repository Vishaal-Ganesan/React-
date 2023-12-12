import React, { useState } from 'react'
import Header from './src/Header';
import BodyApp from './src/BodyApp';
import SideDrawer from './src/SideDrawer';

const MainApp = () => {
    const [openDrawer,setOpenDrawer] = useState(false);
 
        return(
            <div className='app'>
                <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
                <BodyApp/>
                <SideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            </div>
        ) 
}

export default MainApp