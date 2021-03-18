import React from 'react'
import mBannerImage from '../../../assets/rastr/m-banner.jpeg'
import wBannerImage from '../../../assets/rastr/w-banner.jpeg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '20px 5px 10px 5px',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  wrapper: {
    overflow: 'hidden',
    padding: '10px 0',
    flexBasis: '100%',
    [theme.breakpoints.up('md')]: {
      flexBasis: '49%',
      padding: 0
    }
  },
  box: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    overflow: 'hidden',
    '&:hover': {
      '& > $image': {
        transform: 'scale(1.2)'
      }
    }
  },
  title: {
    color: 'orange',
    fontWeight: 600,
    fontSize: 25
  },
  image: {
    width: '100%',
    height: '100%',
    userSelect: 'none',
    transition: 'all 0.3s'
  }
}))

const Promo: React.FC = () => {
  const classes = useStyles()
  {
    /*
      <p className={classes.title}>Для Мужчин</p>
      <p className={classes.title}>Для Женщин</p>
      <img src={wBannerImage} className={classes.image} alt="one" />
    */
  }

  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <img src={wBannerImage} className={classes.image} alt="one" />
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <img src={mBannerImage} className={classes.image} alt="one" />
        </div>
      </div>
    </section>
  )
}

export default Promo
