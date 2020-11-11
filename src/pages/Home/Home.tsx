import React from 'react'
import Advantages from './Advantages/Advantages'
// import MainSlider from '../../components/MainSlider/MainSlider'
import MainSlider from '../../components/Swiper/MainSlider'
import Categories from './Categories/Categories'
// import Popular from './Popular/Popular'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    margin: '0 auto'
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    flexWrap: 'wrap', //
    padding: '20px 10px 0 10px',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'initial'
    }
  },
  subBox_1: {
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      flexBasis: '35%'
    }
  },
  subBox_2: {
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      flexBasis: '65%'
    }
  }
}))

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MainSlider />

      <div className={classes.homeContainer}>
        <div className={classes.subBox_1}>
          <div
            style={{
              width: '100%',
              height: 300,
              background: 'limegreen'
            }}
          />
        </div>
        <div className={classes.subBox_2}>
          <Categories />
        </div>
      </div>
      {/* <Categories /> */}
      {/* <Popular /> */}
      <Advantages />
    </div>
  )
}

export default Home
