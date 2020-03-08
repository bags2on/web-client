import React from 'react'
import Advantages from './Advantages/Advantages'
// import { Link } from 'react-router-dom'
import MainSlider from '../../components/MainSlider/MainSlider'

const Home: React.FC = () => {
  return (
    <div>
      <MainSlider />
      <Advantages />
    </div>
  )
}

export default Home
