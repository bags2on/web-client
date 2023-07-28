import React from 'react'
import Advantages from './Advantages/Advantages'
import MainProduct from '../../MainProduct/MainProduct'
import Carousel from '@/components/Carousel/Carousel'
import Categories from './Categories/Categories'
import Popular from './Popular/Popular'
import Featured from './Featured/Featured'
import Promo from './Promo/Promo'
import SidePromo from './SidePromo'
import { TEMP_MAIN_SLIDER_IMAGES } from './temp'

import {
  SliderContainer,
  MainContainer,
  SideBox,
  HomeContainer,
  MainProductContainer,
  PopularContainer
} from './Home.styled'

interface ProductType {
  id: string
  currentPrice: number
  title: string
  preview: string
  basePrice: number
  mainTag: 'NEW' | 'TOP' | 'STOCK' | 'REGULAR'
}

interface HomeProps {
  recommended: Array<ProductType>
  popular: Array<ProductType>
}

const Home: React.FC<HomeProps> = ({ recommended, popular }) => {
  const mainProduct = {
    id: 'eh345vs',
    title: '#товарДня',
    price: 990
  }

  return (
    <>
      <SliderContainer>
        <Carousel items={TEMP_MAIN_SLIDER_IMAGES} />
        <MainProduct id={mainProduct.id} title={mainProduct.title} price={mainProduct.price} />
      </SliderContainer>
      <MainContainer>
        <SideBox>
          <SidePromo />
        </SideBox>
        {/*  */}
        <HomeContainer>
          <Categories />
          <MainProductContainer>
            <MainProduct id={mainProduct.id} title={mainProduct.title} price={mainProduct.price} />
          </MainProductContainer>
          <Featured products={recommended} />
        </HomeContainer>
      </MainContainer>
      <Promo />
      <PopularContainer>
        <Popular products={popular} />
      </PopularContainer>
      <Advantages />
    </>
  )
}

export default Home
