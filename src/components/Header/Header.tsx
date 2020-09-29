import React from 'react'
import clsx from 'clsx'
// import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Icon from '@material-ui/core/Icon'
import Search from '../../components/Search/Search'
import history from '../../utils/history'
import routes from '../../utils/routes'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg'
import NightToggleSwith from '../../shared/NightToggleSwith/NightToggleSwith'
// import routes from '../../utils/routes'

const GET_CART_TOTALS = gql`
  {
    cartItems @client
  }
`

const UPDATE_CART_TOTALS = gql`
  mutation GetSavedID {
    syncCartWithLocalStorage @client
  }
`

interface HeaderProps {
  onDrawerOpen(): void
  themeChanger(checked: boolean): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0',
    // backgroundColor: theme.palette.type === 'light' ? '#ff9900' : '#282828',
    [theme.breakpoints.up('lg')]: {
      padding: '4px 20px'
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
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  cartIcon: {
    fontSize: 30,
    fill: theme.palette.type === 'light' ? '#303030' : '#ff9900'
  },
  menuIcon: {
    fill: theme.palette.type === 'light' ? '#303030' : '#ff9900'
  },
  cart: {
    // paddingRight: 0
  },
  toggl: {
    marginLeft: 7,
    paddingRight: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

interface CartTotals {
  cartItems: string[]
}

const Header: React.FC<HeaderProps> = ({ onDrawerOpen, themeChanger }) => {
  const classes = useStyles()
  const { data } = useQuery<CartTotals>(GET_CART_TOTALS)
  const [updateTotals] = useMutation(UPDATE_CART_TOTALS)

  React.useEffect(() => {
    updateTotals()
  }, [])

  const handleCartClick = (): void => {
    history.push(routes.cart)
  }

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
      <IconButton color="primary" onClick={handleCartClick} disableRipple className={classes.btns}>
        <Badge badgeContent={data?.cartItems.length} max={999} color="error">
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
