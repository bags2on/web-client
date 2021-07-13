import React from 'react'
import maleBanner from '../../../assets/rastr/m-banner.jpeg'
import femaleBanner from '../../../assets/rastr/f-banner.jpeg'
import routes from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
    margin: '10px 0',
    flexBasis: '100%',
    position: 'relative',
    '&:hover': {
      '& $image': {
        transform: 'scale(1.2)'
      },
      '& $overlay': {
        background: 'linear-gradient(to top, hsla(0, 0%, 0%, 0.9) 6%, hsla(0, 0%, 0%, 0) 50%)'
      },
      '& $fakeButton': {
        color: '#fff',
        backgroundColor: theme.palette.secondary.main
      }
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '49%',
      padding: 0
    }
  },
  overlay: {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, hsla(0, 0%, 0%, 0.6) 6%, hsla(0, 0%, 0%, 0) 50%)',
    textDecoration: 'none',
    '-webkit-tap-highlight-color': 'transparent'
  },
  contentBox: {
    marginLeft: 25,
    marginTop: '43%'
  },
  title: {
    fontWeight: 500,
    fontSize: 23,
    margin: 0,
    color: '#fff',
    userSelect: 'none'
  },
  image: {
    width: '100%',
    height: '100%',
    userSelect: 'none',
    transition: 'all 0.2s'
  },
  fakeButton: {
    display: 'inline-block',
    marginTop: 7,
    fontWeight: 600,
    padding: '8px 10px',
    borderRadius: 16,
    color: '#343434',
    backgroundColor: '#fff',
    textTransform: 'uppercase',
    transition: 'all 0.2s'
  }
}))

const Promo: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <div className={classes.wrapper}>
        <Link
          to={{
            pathname: routes.catalog,
            state: {
              genderType: 'Male'
            }
          }}
          className={classes.overlay}
        >
          <div className={classes.contentBox}>
            <p className={classes.title}>{t('home.promo.male')}</p>
            <div className={classes.fakeButton}>{t('home.promo.action')}</div>
          </div>
        </Link>
        <img src={maleBanner} className={classes.image} alt="банер" />
      </div>
      <div className={classes.wrapper}>
        <Link
          to={{
            pathname: routes.catalog,
            state: {
              genderType: 'Female'
            }
          }}
          className={classes.overlay}
        >
          <div className={classes.contentBox}>
            <p className={classes.title}>{t('home.promo.female')}</p>
            <div className={classes.fakeButton}>{t('home.promo.action')}</div>
          </div>
        </Link>
        <img src={femaleBanner} className={classes.image} alt="банер" />
      </div>
    </section>
  )
}

export default Promo
