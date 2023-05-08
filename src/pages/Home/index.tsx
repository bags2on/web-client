import React from 'react'
import clsx from 'clsx'
import Advantages from './Advantages/Advantages'
import MainProduct from '../../components/MainProduct/MainProduct'
import Carousel from '../../components/Carousel/Carousel'
import Categories from './Categories/Categories'
import Popular from './Popular/Popular'
import SideList from './SideList/SideList'
import Featured from './Featured/Featured'
import Promo from './Promo/Promo'
import JoinUs from './JoinUs/JoinUs'
import { makeStyles } from '@material-ui/core'
import { TEMP_SIDE_LIST_DATA, TEMP_FEATURED_DATA, TEMP_MAIN_SLIDER_IMAGES, TEMP_POPULAR_DATA } from './temp'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1500,
    margin: '0 auto'
  },
  sliderContainer: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      padding: '0 5px'
    },
    [theme.breakpoints.up('tablet')]: {
      padding: '16px 10px 0 10px'
    },
    '& section:nth-of-type(2)': {
      display: 'none',
      [theme.breakpoints.up('tablet')]: {
        display: 'block'
      }
    }
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    padding: '20px 10px 0 10px',
    [theme.breakpoints.up('laptop')]: {
      flexDirection: 'initial'
    }
  },
  subBoxOne: {
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      flexBasis: '25%'
    }
  },
  subBoxTwo: {
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '10px 0 10px 15px',
      flexBasis: '75%'
    }
  },
  mainProductBox: {
    [theme.breakpoints.up('tablet')]: {
      display: 'none'
    }
  }
}))

const Home: React.FC = () => {
  const classes = useStyles()

  const mainProduct = {
    id: 'eh345vs',
    title: '#товарДня',
    price: 990
  }

  return (
    <div>
      <div className={clsx(classes.container, classes.sliderContainer)}>
        <Carousel items={TEMP_MAIN_SLIDER_IMAGES} />
        <MainProduct id={mainProduct.id} title={mainProduct.title} price={mainProduct.price} />
      </div>
      <div className={clsx(classes.container, classes.homeContainer)}>
        <div className={classes.subBoxOne}>
          <SideList products={TEMP_SIDE_LIST_DATA} />
        </div>
        <div className={classes.subBoxTwo}>
          <Categories />
          <div className={classes.mainProductBox}>
            <MainProduct id={mainProduct.id} title={mainProduct.title} price={mainProduct.price} />
          </div>
          <Featured products={TEMP_FEATURED_DATA} />
          <Promo />
        </div>
      </div>
      <div className={classes.container}>
        <Popular products={TEMP_POPULAR_DATA} />
      </div>
      <Advantages />
      <JoinUs />
    </div>
  )
}

export default Home
