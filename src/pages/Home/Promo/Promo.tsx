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
    cursor: 'pointer',
    overflow: 'hidden',
    padding: '10px 0',
    flexBasis: '100%',
    position: 'relative',
    '&:hover': {
      '& $image': {
        transform: 'scale(1.2)'
      },
      '& $overlay': {
        background: 'rgba(255,255,255,0.7)',
        mixBlendMode: 'screen'
      },
      '& $title': {
        color: '#000',
        fontSize: 40
      }
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '49%',
      padding: 0
    }
  },
  overlay: {
    display: 'flex',
    zIndex: 10,
    position: 'absolute',
    background: 'rgba(0,0,0,0)',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s'
  },
  box: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  title: {
    fontWeight: 600,
    fontSize: 28,
    margin: 0,
    color: '#fff',
    userSelect: 'none'
  },
  image: {
    width: '100%',
    height: '100%',
    userSelect: 'none',
    transition: 'all 0.2s'
  }
}))

const Promo: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.overlay}>
          <p className={classes.title}>Для Женщины</p>
        </div>
        <div className={classes.box}>
          <img src={wBannerImage} className={classes.image} alt="банер 'Для Женщины'" />
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.overlay}>
          <p className={classes.title}>Для Мужчины</p>
        </div>
        <div className={classes.box}>
          <img src={mBannerImage} className={classes.image} alt="банер 'Для Мужчины'" />
        </div>
      </div>
    </section>
  )
}

export default Promo
