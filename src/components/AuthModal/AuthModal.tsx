import React from 'react'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import Modal from '../../shared/Modal'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import AuthPatternImage from '../../assets/svg/auth-pattern.svg'
import { SharedMutations } from '../../apollo/cache/mutations'
import { ReactComponent as GoogleLogoImage } from '../../assets/svg/google_logo.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg'
import { GET_AUTH_MODAL_OPEN } from '../../apollo/cache/queries/shared'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((_theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    width: '900px',
    height: '570px'
  },
  imageWrapper: {
    flexBasis: '40%',
    height: '100%',
    backgroundImage: `url(${AuthPatternImage})`
  },
  infoBox: {
    flexBasis: '60%',
    paddingTop: 70
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
    textDecoration: 'none',
    width: 320,
    padding: '15px 20px',
    border: '2px solid #b3b3b3',
    borderRadius: 20,
    transition: 'all .3s',
    fontSize: 16,
    fontWeight: 500,
    color: '#343434',
    '&:hover': {
      color: '#2c80ca',
      borderColor: '#2c80ca'
    }
  }
}))

interface GetAuthModalTypes {
  isAuthModalOpen: boolean
}

const AuthModal: React.FC = () => {
  const classes = useStyles()
  const { data } = useQuery<GetAuthModalTypes>(GET_AUTH_MODAL_OPEN)

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isOpen = data!.isAuthModalOpen

  const handleClose = (): void => {
    SharedMutations.closeAuthModal()
  }

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div className={classes.root}>
        <div className={classes.imageWrapper} />
        <div className={classes.infoBox}>
          <Typography component="h3" className={classes.title}>
            Здравствуйте!
          </Typography>
          <Typography component="p" className={classes.subTitle}>
            Пройдите авторизацию, чтобы получить больше возможностей
          </Typography>
          <ul className={classes.mediaList}>
            <li>
              <Link to="#" className={classes.link}>
                <SvgIcon component="span" className={classes.mediaLogo}>
                  <GoogleLogoImage />
                </SvgIcon>
                <span>Войти через Google</span>
              </Link>
            </li>
            <li>
              <Link to="#" className={classes.link}>
                <SvgIcon component="span" className={classes.mediaLogo}>
                  <InstagramIcon />
                </SvgIcon>
                <span>Войти через Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  )
}

export default AuthModal
