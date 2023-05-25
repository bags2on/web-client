import React from 'react'
import Button from '../../../shared/Button/Button'
import Modal from '../../../shared/Modal'
import { Link } from 'react-router-dom'
import { ReactComponent as LetterCheckImage } from '../../../assets/svg/Asset_2.svg'
import { makeStyles } from '@material-ui/core'
import routes from '../../../utils/routes'

interface SomethingWrongProps {
  open: boolean
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      padding: '0 50px',
      height: '570px'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.up('laptop')]: {
      width: 900
    }
  },
  imageBox: {
    paddingTop: 75,
    [theme.breakpoints.up('lg')]: {
      paddingTop: 0,
      marginRight: 50
    },
    [theme.breakpoints.up('laptop')]: {
      marginRight: 0,
      flexBasis: '50%'
    }
  },
  image: {
    width: 170,
    margin: '0 auto',
    [theme.breakpoints.up('lg')]: {
      width: 250
    }
  },
  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
    textAlign: 'center'
  },
  subTitle: {
    maxWidth: 340,
    margin: '0 auto',
    textAlign: 'center',
    '& p': {
      margin: 0,
      fontSize: 13,
      lineHeight: '15px',
      color: theme.palette.type === 'light' ? '#676767' : '#e7e7e7'
    }
  },
  infoBox: {
    padding: '30px 10px 0 10px'
  },
  relodeButton: {
    maxWidth: 240,
    marginTop: 30,
    display: 'block',
    margin: '0 auto'
  },
  or: {
    textAlign: 'center'
  },
  link: {
    fontSize: 16,
    textAlign: 'center',
    display: 'block',
    color: theme.palette.type === 'light' ? '#363636' : theme.palette.secondary.main,
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

const SomethingWrong: React.FC<SomethingWrongProps> = ({ open }) => {
  const classes = useStyles()

  const hanleReloadClick = () => {
    window.location.reload()
  }

  // TODO: update shared Modal
  const onClose = () => {
    console.log('close')
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.root}>
        <div className={classes.imageBox}>
          <div className={classes.image}>
            <LetterCheckImage />
          </div>
        </div>
        <div className={classes.infoBox}>
          <h3 className={classes.title}>Не удалось получить данные с сервера</h3>
          <div className={classes.subTitle}>
            <p>Попробуйте перезагрузить страницу или повторите попытку позже</p>
          </div>
          {/* className={classes.relodeButton} */}
          <Button fullWidth color="secondary" onClick={hanleReloadClick}>
            перезагрузить
          </Button>
          <p className={classes.or}>или</p>
          <Link to={routes.root} className={classes.link}>
            вернуться на главную
          </Link>
        </div>
      </div>
    </Modal>
  )
}

export default SomethingWrong
