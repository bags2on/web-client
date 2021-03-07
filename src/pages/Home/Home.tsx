import React from 'react'
import Advantages from './Advantages/Advantages'
// import MainSlider from '../../components/MainSlider/MainSlider'
import MainSlider from '../../components/Swiper/MainSlider'
import MainProduct from '../../components/MainProduct/MainProduct'
import Categories from './Categories/Categories'
import Popular from './Popular/Popular'
import SideList from './SideList/SideList'
import Featured from './Featured/Featured'
import Promo from './Promo/Promo'
import { makeStyles } from '@material-ui/core'
import { TEMP_SIDE_LIST_DATA, TEMP_FEATURED_DATA } from './temp'

const useStyles = makeStyles((theme) => ({
  root: {},
  sliderContainer: {
    maxWidth: 1400,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('tablet')]: {
      padding: '0 10px'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '16px 25px 0 10px'
    }
  },
  homeContainer: {
    maxWidth: 1400,
    margin: '0 auto',
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
    // backgroundColor: '#0f4c81',
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      padding: '10px 15px',
      flexBasis: '75%'
    }
  }
}))

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.sliderContainer}>
        <MainSlider />
        <MainProduct id={'eh345vs'} title={'#товарДня'} price={1990} />
      </div>
      <div className={classes.homeContainer}>
        <div className={classes.subBoxOne}>
          <SideList products={TEMP_SIDE_LIST_DATA} />
        </div>
        <div className={classes.subBoxTwo}>
          <Categories />
          <Featured products={TEMP_FEATURED_DATA} />
          <Promo />
        </div>
      </div>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <Popular />
      </div>
      <Advantages />
    </div>
  )
}

export default Home
