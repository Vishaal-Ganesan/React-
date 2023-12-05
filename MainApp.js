import React, { useState } from 'react'
import Header from './components/Header';
import BodyApp from './components/BodyApp';
import SideDrawer from './components/SideDrawer';

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