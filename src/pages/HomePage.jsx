import React from 'react'
import Footer from '../components/Footer'
import Categories from '../components/HomePost/Categories'
import Recent from '../components/HomePost/Recent'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function HomePage() {
  return (
    <div>
        <Slider/>
        <Recent/>
        <Categories/>
        <Footer/>
    </div>
  )
}

export default HomePage