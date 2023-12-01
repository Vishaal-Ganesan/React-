import React from 'react'
import Header from './components/Header';
import BodyApp from './components/BodyApp';

const MainApp = () => {
        return(
            <div className='app'>
                <Header/>
                <BodyApp/>
            </div>
        ) 
}

export default MainApp