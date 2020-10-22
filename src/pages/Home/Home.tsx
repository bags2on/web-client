import React from 'react'
import Advantages from './Advantages/Advantages'
// import MainSlider from '../../components/MainSlider/MainSlider'
import MainSlider from '../../components/Swiper/MainSlider'
import Categories from './Categories/Categories'
import Popular from './Popular/Popular'

const Home: React.FC = () => {
  return (
    <div>
      <MainSlider />
      <Categories />
      <Popular />
      <Advantages />
    </div>
  )
}

export default Home
