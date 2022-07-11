import React from 'react'
import Categories from '../components/HomePost/Categories'
import Recent from '../components/HomePost/Recent'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Recent/>
        <Categories/>
    </div>
  )
}

export default HomePage