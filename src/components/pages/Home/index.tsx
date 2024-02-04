import React from 'react'
import clsx from 'clsx'
import { Advantages } from './Advantages/Advantages'
import { MainProduct } from '../../MainProduct/MainProduct'
import { MainCarousel } from '@/components/Carousel'
import { Categories } from './Categories/Categories'
import { Featured } from './Featured/Featured'
import { Promo } from './Promo/Promo'
import { SidePromo } from './SidePromo'

import type { Slide } from '@/components/Carousel'

import 'keen-slider/keen-slider.min.css'

import styles from './Home.module.scss'

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

export function HomeIndex({ sliderData, featuredProducts }: HomeProps) {
  const mainProduct = {
    id: 'eh345vs',
    title: '#товарДня',
    price: 990
  }

  return (
    <>
      <div className={clsx(styles.containerShare, styles.sliderContainer)}>
        <MainCarousel slides={sliderData} />
        <div>
          <MainProduct id={mainProduct.id} title={mainProduct.title} price={mainProduct.price} />
        </div>
      </div>
      <div className={clsx(styles.containerShare, styles.mainContainer)}>
        <div className={styles.sideBox}>
          <SidePromo />
        </div>
        {/*  */}
        <div className={styles.homeContainer}>
          <Categories />
          <div className={styles.mainProductWrapper}>
            <MainProduct id={mainProduct.id} title={mainProduct.title} price={mainProduct.price} />
          </div>
          <Featured products={featuredProducts} />
        </div>
      </div>
      <Promo />
      <Advantages />
    </>
  )
}
