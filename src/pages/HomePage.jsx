import React from 'react'
import Categories from '../components/HomePost/Categories'
import Recent from '../components/HomePost/Recent'
import Slider from '../components/Slider'

function HomePage() {
  return (
    <div>
        <Slider/>
        <Recent/>
        <Categories/>
    </div>
  )
}

export default HomePage