import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner.js'
import RowList from '../../Components/Rows/RowList/RowList.js'

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <RowList />
        <Footer/>
    </>
  )
}

export default Home