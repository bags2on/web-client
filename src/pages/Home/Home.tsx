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

const TEMP_SIDE_LIST_DATA: {
  id: string
  title: string
  price: number
  imageURL: string
}[] = [
  {
    id: 'b64rsa',
    price: 410,
    title: 'Brand Bucket',
    imageURL: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1606135113/bags2on/products/side/w1_xccmio.jpg'
  },
  {
    id: 'e21s23',
    price: 617,
    title: 'Perimeter Wallet',
    imageURL: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1606135113/bags2on/products/side/w2_inefvy.jpg'
  },
  {
    id: 'kwh734',
    price: 399,
    title: 'Canvas Wallet',
    imageURL: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1606135113/bags2on/products/side/w3_rexqlj.jpg'
  },
  {
    id: 'g74tjc',
    price: 500,
    title: 'Wallet Scouts',
    imageURL: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1606135113/bags2on/products/side/w4_mq2h3v.jpg'
  },
  {
    id: 'gh37634nd',
    price: 250,
    title: 'Connection Wallet',
    imageURL: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1606135113/bags2on/products/side/w2_inefvy.jpg'
  },
  {
    id: 'bvg5393e',
    price: 300,
    title: 'Mini Wallet',
    imageURL: 'https://res.cloudinary.com/dct4oinuz/image/upload/v1606135113/bags2on/products/side/w1_xccmio.jpg'
  }
]

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
