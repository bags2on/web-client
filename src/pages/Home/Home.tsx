import React from 'react'
import Advantages from './Advantages/Advantages'
// import MainSlider from '../../components/MainSlider/MainSlider'
import MainSlider from '../../components/Swiper/MainSlider'
import Categories from './Categories/Categories'
import Popular from './Popular/Popular'
import Featured from './Featured/Featured'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  homeContainer: {
    maxWidth: 1400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column-reverse',
    flexWrap: 'wrap', //
    padding: '20px 10px 0 10px',
    [theme.breakpoints.up('md')]: {
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

const TEMP_FEATURED_DATA: {
  id: string
  title: string
  price: number
  preview: string
}[] = [
  {
    id: '001',
    title: 'Suitcase JR',
    price: 2920,
    preview: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1588350776/bags2on/products/3141b_k67pzc.webp'
  },
  {
    id: '002',
    title: 'A-1 Suitcase',
    price: 3617,
    preview: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1588350890/bags2on/products/coreim_mdbdmh.png'
  },
  {
    id: '003',
    title: 'Suitcase BM',
    price: 2182,
    preview: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1569928348/bags2on/products/test-bag_1_d07zy6.jpg'
  },
  {
    id: '004',
    title: 'Light SSR-1',
    price: 2629,
    preview: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1588350776/bags2on/products/3440b_izlckz.webp'
  }
]

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <MainSlider />
      </div>

      <div className={classes.homeContainer}>
        <div className={classes.subBoxOne}>
          <div
            style={{
              width: '100%',
              height: 300,
              background: 'limegreen'
            }}
          />
        </div>
        <div className={classes.subBoxTwo}>
          <Categories />
          <Featured products={TEMP_FEATURED_DATA} />
        </div>
      </div>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <Popular />
      </div>
      {/* <Categories /> */}
      <Advantages />
    </div>
  )
}

export default Home
