import React from 'react';
import Search from './searchComponent';
import QuickSearch from './quickComponent';
import Header from '../Header'
const Home=(props)=>{
    console.log("Home",props);
    return(
        <>
        <Header/>
        <Search/>
        <QuickSearch/>
        </>
    )
}

export default Home;