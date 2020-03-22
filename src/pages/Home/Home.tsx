import React from 'react'
import Advantages from './Advantages/Advantages'
// import { Link } from 'react-router-dom'
import MainSlider from '../../components/MainSlider/MainSlider'
import Categories from './Categories/Categories'

const Home: React.FC = () => {
  return (
    <div>
      <MainSlider />
      <Categories />
      <Advantages />
    </div>
  )
}

export default Home
