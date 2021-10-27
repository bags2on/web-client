import React from 'react'
import clsx from 'clsx'
import history from '../../utils/history'
import routes from '../../utils/routes'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Search from '../../components/Search/Search'
import { ReactComponent as MenuIcon } from '../../assets/svg/icons/menu.svg'
import { ReactComponent as HeartIcon } from '../../assets/svg/icons/heart.svg'
import { ReactComponent as AvatarIcon } from '../../assets/svg/icons/avatar.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/icons/header_cart.svg'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core'
import { GET_HEADER_DATA } from '../../apollo/cache/queries/shared'
import { SharedMutations } from '../../apollo/cache/mutations'
import { useTranslation } from 'react-i18next'
import logoImage from '../../assets/svg/logo.svg'

interface HeaderProps {
  onDrawerOpen(): void
  onCartOpen(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 500,
    top: 0,
    left: 0,
    right: 0,
    flexWrap: 'wrap',
    padding: '5px 0',
    backgroundColor: '#282828',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.05)',
    [theme.breakpoints.up('lg')]: {
      position: 'static',
      padding: '10px 17px'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '13px 50px'
    }
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1500px',
    margin: '0 auto'
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      position: 'relative',
      top: 3,
      width: 150,
      '& > img': {
        width: '100%',
        height: '100%'
      }
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0 40px'
    }
  },
  navList: {
    display: 'none',
    padding: 0,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      '& a': {
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: theme.palette.secondary.main,
        transition: 'color 0.3s',
        position: 'relative',
        '&::after': {
          content: "''",
          position: 'absolute',
          borderBottom: '2px solid',
          borderBottomColor: theme.palette.secondary.main,
          bottom: -7,
          left: 0,
          right: 0,
          opacity: 0,
          visibility: 'hidden',
          width: 0,
          zIndex: 1,
          transition: 'all .3s ease',
          '-moz-transition': 'all .3s ease 0s',
          '-webkit-transition': 'all .3s ease 0s',
          '-o-transition': 'all .3s ease 0s',
          '-ms-transition': 'all .3s ease 0s'
        },
        '&:hover': {
          '&::after': {
            width: '45%',
            opacity: 1,
            visibility: 'visible'
          }
        }
      }
    }
  },
  btns: {
    '&:hover': {
      background: 'none',
      '& svg': {
        transition: 'all 0.3s'
      }
    }
  },

  heartButton: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      padding: 11
    }
  },
  heartIcon: {
    fontSize: 24,
    fill: 'none',
    stroke: theme.palette.secondary.main,
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  avatarIcon: {
    fontSize: 24,
    fill: theme.palette.secondary.main,
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  cartIcon: {
    fontSize: 27,
    fill: theme.palette.secondary.main,
    stroke: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    }
  },
  menuIcon: {
    fill: theme.palette.secondary.main
  },
  toggl: {
    marginLeft: 7,
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

interface HeaderQuery {
  cartAmount: number
  favoriteAmount: number
}

const Header: React.FC<HeaderProps> = ({ onDrawerOpen, onCartOpen }) => {
  const classes = useStyles()
  const { data } = useQuery<HeaderQuery>(GET_HEADER_DATA)
  const { t } = useTranslation()

  const cartAmount = data?.cartAmount
  const favoriteAmount = data?.favoriteAmount

  const handleCartClick = (): void => {
    onCartOpen()
  }

  const handleFavoritesClick = (): void => {
    history.push(routes.favorite)
  }

  const handleProfileClick = (): void => {
    const isAuth = SharedMutations.checkAuthentication()
    if (isAuth) {
      history.push(routes.profileInfo)
    }
  }

  return (
    <header className={classes.root}>
      <div className={classes.wrapper}>
        <IconButton onClick={onDrawerOpen} disableRipple className={classes.btns}>
          <Icon
            classes={{
              root: classes.menuIcon
            }}
          >
            <MenuIcon />
          </Icon>
        </IconButton>
        <Link to="/" className={classes.logo}>
          <img src={logoImage} alt="логотип" />
        </Link>
        <nav>
          <List className={classes.navList}>
            <ListItem component="li">
              <Link to={routes.root}>{t('header.home')}</Link>
            </ListItem>
            <ListItem component="li">
              <Link to={routes.catalog}>Каталог</Link>
            </ListItem>
          </List>
        </nav>
        {/*  */}
        <Search />
        {/*  */}
        <IconButton
          color="primary"
          onClick={handleFavoritesClick}
          disableRipple
          className={clsx(classes.btns, classes.heartButton)}
        >
          <Badge badgeContent={favoriteAmount} max={999} color="error">
            <Icon className={classes.heartIcon}>
              <HeartIcon />
            </Icon>
          </Badge>
        </IconButton>
        <IconButton
          color="primary"
          onClick={handleProfileClick}
          disableRipple
          className={clsx(classes.btns, classes.heartButton)}
        >
          <Badge badgeContent={0} max={999} color="error">
            <Icon className={classes.avatarIcon}>
              <AvatarIcon />
            </Icon>
          </Badge>
        </IconButton>
        <IconButton color="primary" onClick={handleCartClick} disableRipple className={classes.btns}>
          <Badge badgeContent={cartAmount} max={999} color="error">
            <Icon className={classes.cartIcon}>
              <CartIcon />
            </Icon>
          </Badge>
        </IconButton>
      </div>
    </header>
  )
}

export default Header
