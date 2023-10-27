import React from 'react'
import Advantages from './Advantages/Advantages'
import MainProduct from '../../MainProduct/MainProduct'
import Carousel from '@/components/Carousel/Carousel'
import Categories from './Categories/Categories'
import Featured from './Featured/Featured'
import Promo from './Promo/Promo'
import SidePromo from './SidePromo'

import type { Slide } from '@/components/Carousel/Carousel'

import {
  SliderContainer,
  MainContainer,
  SideBox,
  HomeContainer,
  MainProductContainer
} from './Home.styled'

interface ProductType {
  id: string
  slug: string
  currentPrice: number
  title: string
  preview: string
  basePrice: number
  mainTag?: 'NEW' | 'TOP' | 'STOCK' | 'REGULAR' | null
}

interface HomeProps {
  featuredProducts: Array<ProductType>
  sliderData: Array<Slide>
}

const Home: React.FC<HomeProps> = ({ sliderData, featuredProducts }) => {
  const mainProduct = {
    id: 'eh345vs',
    title: '#товарДня',
    price: 990
  }

  return (
    <>
      <SliderContainer>
        <Carousel slides={sliderData} />
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
          <Featured products={featuredProducts} />
        </HomeContainer>
      </MainContainer>
      <Promo />
      <Advantages />
    </>
  )
}

export default Home
