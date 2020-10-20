import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Search from '../../components/Search_v2/Search'
import HeaderUnderline from './HeaderUnderline'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/new_cart.svg'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg'
import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg'
import logo from '../../assets/svg/logo.svg'
// import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
// import NightToggleSwith from '../../shared/NightToggleSwith/NightToggleSwith'

const GET_CART_TOTALS = gql`
  {
    cartIDs @client
  }
`

const UPDATE_CART_TOTALS = gql`
  mutation GetSavedID {
    syncCartWithLocalStorage @client
  }
`

interface HeaderProps {
  onDrawerOpen(): void
  onCartOpen(): void
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    padding: '5px 0',
    backgroundColor: theme.palette.type === 'light' ? 'transparent' : '#282828',
    [theme.breakpoints.up('lg')]: {
      padding: '4px 20px'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '27px 50px'
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.type === 'light' ? 'transparent' : '#282828'
    }
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      position: 'absolute',
      transform: 'translateX(-50%)',
      left: '50%',
      width: 189,
      top: 26,
      '& > img': {
        width: '100%',
        height: '100%'
      }
    }
  },
  nav: {
    // marginLeft: 50
  },
  navList: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      '& > li': {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 0
      },
      '& a': {
        fontSize: 14,
        fontWeight: 600,
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: theme.palette.type === 'light' ? '#303030' : '#ff9900'
      }
    }
  },

  btns: {
    '&:hover': {
      background: 'none'
    }
  },
  menuBtn: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  heartButton: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  },
  heartIcon: {
    fontSize: 23,
    fill: 'none',
    stroke: '#000'
  },
  cartIcon: {
    fontSize: 26,
    fill: theme.palette.type === 'light' ? '#303030' : '#ff9900',
    [theme.breakpoints.up('md')]: {
      fontSize: 23,
      marginTop: -4
    }
  },
  menuIcon: {
    fill: theme.palette.type === 'light' ? '#303030' : '#ff9900'
  },
  cart: {},
  toggl: {
    marginLeft: 7,
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

interface CartTotals {
  cartIDs: string[]
}

const Header: React.FC<HeaderProps> = ({ onDrawerOpen, onCartOpen, themeChanger }) => {
  const classes = useStyles()
  const { data } = useQuery<CartTotals>(GET_CART_TOTALS)
  const [updateTotals] = useMutation(UPDATE_CART_TOTALS)

  useEffect(() => {
    updateTotals()
  }, [])

  const handleCartClick = (): void => {
    onCartOpen()
  }

  const handleFavoritesClick = (): void => {}

  return (
    <header className={classes.root}>
      <IconButton onClick={onDrawerOpen} disableRipple className={clsx(classes.btns, classes.menuBtn)}>
        <Icon
          classes={{
            root: classes.menuIcon
          }}
        >
          <MenuIcon />
        </Icon>
      </IconButton>
      <nav className={classes.nav}>
        <List className={classes.navList}>
          <ListItem component="li">
            <Link to={'#'}>Главная</Link>
          </ListItem>
          <ListItem component="li">
            <Link to={'#'}>Каталог</Link>
          </ListItem>
          <ListItem component="li">
            <Link to={'#'}>Акции</Link>
          </ListItem>
        </List>
      </nav>
      <Link to="/" className={classes.logo}>
        <img src={logo} alt="Bags2on" />
      </Link>
      {/*  */}
      <Search />
      {/*  */}
      {/* <IconButton
        color="primary"
        onClick={handleFavoritesClick}
        disableRipple
        style={{
          marginLeft: 'auto'
        }}
        className={clsx(classes.btns, classes.heartButton)}
      >
        <Badge badgeContent={0} max={999} color="error">
          <Icon className={classes.cartIcon}>
            <SearchIcon />
          </Icon>
        </Badge>
      </IconButton> */}
      <IconButton
        color="primary"
        onClick={handleFavoritesClick}
        disableRipple
        className={clsx(classes.btns, classes.heartButton)}
      >
        <Badge badgeContent={0} max={999} color="error">
          <Icon className={classes.heartIcon}>
            <HeartIcon />
          </Icon>
        </Badge>
      </IconButton>
      <IconButton
        color="primary"
        onClick={handleFavoritesClick}
        disableRipple
        className={clsx(classes.btns, classes.heartButton)}
      >
        <Badge badgeContent={0} max={999} color="error">
          <Icon className={classes.cartIcon}>
            <ProfileIcon />
          </Icon>
        </Badge>
      </IconButton>
      <IconButton color="primary" onClick={handleCartClick} disableRipple className={classes.btns}>
        <Badge badgeContent={data?.cartIDs.length} max={999} color="error">
          <Icon className={classes.cartIcon}>
            <CartIcon />
          </Icon>
        </Badge>
      </IconButton>
      {/* <div className={classes.toggl}>
        <NightToggleSwith themeChanger={themeChanger} />
      </div> */}
      <HeaderUnderline />
    </header>
  )
}

export default Header
