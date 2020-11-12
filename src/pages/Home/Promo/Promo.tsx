import React from 'react'
import firstImage from '../../../assets/rastr/block_one.png'
import { makeStyles } from '@material-ui/core'

interface PromoProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '20px 5px 10px 5px',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  box: {
    flexBasis: '100%',
    padding: '10px 0',
    '& > img': {
      width: '100%',
      height: '100%'
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '49%',
      padding: 0
    }
  }
}))

const Promo: React.FC<PromoProps> = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <div className={classes.box}>
        <img src={firstImage} alt="one" />
      </div>
      <div className={classes.box}>
        <img src={firstImage} alt="two" />
      </div>
    </section>
  )
}

export default Promo
