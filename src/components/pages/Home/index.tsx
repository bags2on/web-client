import React from 'react'
import Advantages from './Advantages/Advantages'
import MainProduct from '../../MainProduct/MainProduct'
import Carousel from '@/components/Carousel/Carousel'
import Categories from './Categories/Categories'
import Popular from './Popular/Popular'
import Featured from './Featured/Featured'
import Promo from './Promo/Promo'
import { TEMP_FEATURED_DATA, TEMP_MAIN_SLIDER_IMAGES, TEMP_POPULAR_DATA } from './temp'

import {
  SliderContainer,
  HomeContainer,
  MainProductContainer,
  PopularContainer
} from './Home.styled'

const Home: React.FC = () => {
  const mainProduct = {
    id: 'eh345vs',
    title: '#товарДня',
    price: 990
  }

  return (
    <div>
      <SliderContainer>
        <Carousel items={TEMP_MAIN_SLIDER_IMAGES} />
        <MainProduct id={mainProduct.id} title={mainProduct.title} price={mainProduct.price} />
      </SliderContainer>
      <HomeContainer>
        <Categories />
        <MainProductContainer>
          <MainProduct id={mainProduct.id} title={mainProduct.title} price={mainProduct.price} />
        </MainProductContainer>
        <Featured products={TEMP_FEATURED_DATA} />
        <Promo />
      </HomeContainer>
      <PopularContainer>
        <Popular products={TEMP_POPULAR_DATA} />
      </PopularContainer>
      <Advantages />
    </div>
  )
}

export default Home
