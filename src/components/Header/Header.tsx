import React from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Search from '../../components/Search/Search'
import routes from '../../utils/routes'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg'
import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/new_cart.svg'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core'
import { GET_HEADER_DATA } from '../../apollo/cache/queries/shared'
import { SharedMutations } from '../../apollo/cache/mutations'
import logoImage from '../../assets/svg/logo.svg'

interface HeaderProps {
  onDrawerOpen(): void
  onCartOpen(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 500,
    top: 0,
    left: 0,
    right: 0,
    flexWrap: 'wrap',
    padding: '5px 0',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.05)',
    [theme.breakpoints.up('lg')]: {
      position: 'static',
      padding: '10px 17px'
    },
    [theme.breakpoints.up('laptop')]: {
      padding: '10px 50px'
    }
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
        color: '#343434',
        transition: 'color 0.3s',
        position: 'relative',
        '&::after': {
          content: "''",
          position: 'absolute',
          borderBottom: '2px solid',
          borderBottomColor: theme.palette.type === 'light' ? '#808080' : '#A0A0A0',
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
    stroke: '#343434',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  profileIcon: {
    fontSize: 24,
    fill: '#343434',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  cartIcon: {
    fontSize: 27,
    fill: '#343434',
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    }
  },
  menuIcon: {
    fill: '#343434'
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

  const cartAmount = data?.cartAmount
  const favoriteAmount = data?.favoriteAmount

  const handleCartClick = (): void => {
    onCartOpen()
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleFavoritesClick = (): void => {}

  const handleProfileClick = (): void => {
    SharedMutations.redirectToProfile()
  }

  return (
    <header className={classes.root}>
      <IconButton onClick={onDrawerOpen} disableRipple className={classes.btns}>
        <Icon
          classes={{
            root: classes.menuIcon
          }}
        >
          <MenuIcon />
        </Icon>
      </IconButton>
      <div className={classes.logo}>
        <img src={logoImage} alt="логотип" />
      </div>
      <nav>
        <List className={classes.navList}>
          <ListItem component="li">
            <Link to={routes.root}>Главная</Link>
          </ListItem>
          <ListItem component="li">
            <Link to={routes.allCatalog}>Каталог</Link>
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
          <Icon className={classes.profileIcon}>
            <ProfileIcon />
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
    </header>
  )
}

export default Header
