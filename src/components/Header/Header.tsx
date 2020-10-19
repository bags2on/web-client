import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Icon from '@material-ui/core/Icon'
import Search from '../../components/Search/Search'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/new_cart.svg'
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg'
import NightToggleSwith from '../../shared/NightToggleSwith/NightToggleSwith'

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
    padding: '5px 0',
    backgroundColor: theme.palette.type === 'light' ? 'transparent' : '#282828',
    [theme.breakpoints.up('lg')]: {
      padding: '4px 20px'
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.type === 'light' ? 'transparent' : '#282828'
    }
  },
  logo: {
    width: 180,
    margin: '8px 20px 0 10px',
    '& > img': {
      width: '100%',
      height: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
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
    fontSize: 23,
    marginTop: -4,
    fill: theme.palette.type === 'light' ? '#303030' : '#ff9900'
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
      {/* <Link to="/">
        <div className={classes.logo}>
          <img src={logo} alt="Bags2on" />
        </div>
      </Link> */}
      <Search />
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
      <IconButton color="primary" onClick={handleCartClick} disableRipple className={classes.btns}>
        <Badge badgeContent={data?.cartIDs.length} max={999} color="error">
          <Icon className={classes.cartIcon}>
            <CartIcon />
          </Icon>
        </Badge>
      </IconButton>
      <div className={classes.toggl}>
        <NightToggleSwith themeChanger={themeChanger} />
      </div>
    </header>
  )
}

export default Header
