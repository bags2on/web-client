import React, { useState } from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import Modal from '../../shared/Modal'
import AuthPatternImage from '../../assets/rastr/animal-pattern.jpeg'
import { useReactiveVar } from '@apollo/client'
import { SharedMutations } from '../../apollo/cache/mutations'
import { authModalVar } from '../../apollo/cache/variables'
import { ReactComponent as GoogleLogoImage } from '../../assets/svg/google_logo.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/icons/instagram.svg'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      height: '570px'
    },
    [theme.breakpoints.up('laptop')]: {
      width: 900
    }
  },
  imageWrapper: {
    height: '100%',
    display: 'none',
    backgroundImage: `url(${AuthPatternImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('laptop')]: {
      display: 'block',
      flexBasis: '35%'
    }
  },
  infoBox: {
    flexBasis: '100%',
    paddingTop: 70,
    [theme.breakpoints.up('laptop')]: {
      flexBasis: '65%'
    }
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 7
  },
  subTitle: {
    textAlign: 'center',
    maxWidth: 370,
    fontSize: 17,
    fontWeight: 500,
    margin: '0 auto'
  },
  mediaList: {
    margin: '0',
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    '& li': {
      display: 'flex',
      justifyContent: 'center',
      flexBasis: '100%',
      marginBottom: 20
    }
  },
  mediaLogo: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: 320,
    padding: '10px 15px',
    border: '2px solid #343434',
    borderRadius: 20,
    transition: 'all .3s',
    fontSize: 16,
    fontWeight: 500,
    color: '#343434',
    '&:hover': {
      color: '#2c80ca',
      borderColor: '#2c80ca'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '15px 20px'
    }
  },
  errorMessage: {
    fontSize: 16,
    color: '#ff182e',
    textAlign: 'center'
  }
}))

const API_URL = process.env.REACT_APP_API_URL

const AuthModal: React.FC<{ children?: React.ReactNode }> = () => {
  const classes = useStyles()
  const isModalOpen = useReactiveVar(authModalVar)
  const [withError, setError] = useState<boolean>(false)

  const fadeStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0 },
    to: {
      opacity: withError ? 1 : 0
    }
  })

  const handleClose = (): void => {
    setError(false)
    SharedMutations.closeAuthModal()
  }

  const handleGoogleClick = async (): Promise<void> => {
    try {
      const url = await fetch(API_URL + '/google-oauth').then((resp) => resp.text())
      window.location.replace(url)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <div className={classes.root}>
        <div className={classes.imageWrapper} />
        <div className={classes.infoBox}>
          <h3 className={classes.title}>Здравствуйте!</h3>
          <p className={classes.subTitle}>Пройдите авторизацию, чтобы получить больше возможностей</p>
          <ul className={classes.mediaList}>
            <li>
              <div className={classes.link} onClick={handleGoogleClick}>
                <SvgIcon component="span" className={classes.mediaLogo}>
                  <GoogleLogoImage />
                </SvgIcon>
                <span>Войти через Google</span>
              </div>
            </li>
            <li>
              <div className={classes.link}>
                <SvgIcon component="span" className={classes.mediaLogo}>
                  <InstagramIcon />
                </SvgIcon>
                <span>Войти через Instagram</span>
              </div>
            </li>
          </ul>
          <animated.div style={fadeStyles}>
            <p className={classes.errorMessage}>Ошибка, повторите попытку позже</p>
          </animated.div>
        </div>
      </div>
    </Modal>
  )
}

export default AuthModal
