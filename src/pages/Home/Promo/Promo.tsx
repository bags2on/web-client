import React from 'react'
import routes from '../../../utils/routes'
import manImage from '../../../assets/svg/man.svg'
import womanImage from '../../../assets/svg/woman.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '0 5px 10px 5px',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  wrapper: {
    textDecoration: 'none',
    marginTop: 10,
    display: 'flex',
    overflow: 'hidden',
    flexBasis: '100%',
    height: 250,
    borderRadius: 6,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#363636',
    '-webkit-tap-highlight-color': 'transparent',
    [theme.breakpoints.up('md')]: {
      flexBasis: '49%',
      padding: 0,
      '&:hover': {
        '& $image': {
          transform: 'scale(1.1)'
        }
      }
    }
  },
  contentBox: {
    width: '100%',
    paddingTop: 75
  },
  image: {
    maxWidth: 175,
    userSelect: 'none',
    transition: 'all 0.3s',
    '& > img': {
      width: '100%',
      height: '100%'
    }
  },
  title: {
    fontWeight: 500,
    fontSize: 23,
    margin: 0,
    textAlign: 'center',
    color: theme.palette.type === 'light' ? '#343434' : '#fff',
    userSelect: 'none'
  },
  buttonWrapper: {
    marginTop: 17,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  },
  fakeButton: {
    display: 'inline-block',
    fontWeight: 600,
    padding: '8px 10px',
    borderRadius: 16,
    border: '1px solid',
    borderColor: theme.palette.type === 'light' ? '#343434' : theme.palette.secondary.main,
    color: theme.palette.type === 'light' ? '#343434' : '#fff',
    textTransform: 'uppercase',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: theme.palette.type === 'light' ? '#343434' : theme.palette.secondary.main,
      color: theme.palette.type === 'light' ? '#fff' : '#343434'
    }
  }
}))

const Promo: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Link
        to={{
          pathname: routes.catalog,
          state: {
            genderType: 'Female'
          }
        }}
        className={classes.wrapper}
      >
        <div className={classes.image}>
          <img src={womanImage} alt={`банер: '${t('home.promo.female')}'`} />
        </div>
        <div className={classes.contentBox}>
          <p className={classes.title}>{t('home.promo.female')}</p>
          <div className={classes.buttonWrapper}>
            <div className={classes.fakeButton}>{t('home.promo.action')}</div>
          </div>
        </div>
      </Link>
      <Link
        to={{
          pathname: routes.catalog,
          state: {
            genderType: 'Male'
          }
        }}
        className={classes.wrapper}
      >
        <div className={classes.image}>
          <img src={manImage} alt={`банер: '${t('home.promo.male')}'`} />
        </div>
        <div className={classes.contentBox}>
          <p className={classes.title}>{t('home.promo.male')}</p>
          <div className={classes.buttonWrapper}>
            <div className={classes.fakeButton}>{t('home.promo.action')}</div>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default Promo
