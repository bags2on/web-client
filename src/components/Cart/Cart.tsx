/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import CartItems from './CartItems/CartItems'
import Checkout from './Checkout/Checkout'
import OrderSuccess from './OrderSuccess/OrderSuccess'
import { useTransition, animated, config } from 'react-spring'
import { makeStyles } from '@material-ui/core'

interface CartProps {
  isOpen: boolean
  onClose(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.type === 'dark' ? '#fff' : '#000'
  },
  drawer: {
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('md')]: {
      maxWidth: 400 // 363
    }
  },
  box: {
    '& > div': {
      cursor: 'pointer',
      position: 'absolute',
      width: '100%',
      willChange: 'transform'
    }
  }
}))

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const classes = useStyles()

  const [currentPage, setCurrentPage] = useState<number>(0)

  // const onClick = useCallback(() => set((state) => (state + 1) % 3), [])
  const transitions = useTransition(currentPage, (p) => p, {
    from: { transform: 'translate3d(100%,0,0)' },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: 'translate3d(-100%,0,0)' },
    config: config.default
  })

  const handleCheckout = (): void => {
    setCurrentPage(1)
  }

  const handleConfirm = (): void => {
    setCurrentPage(2)
  }
  const handleToPrev = (): void => {
    setCurrentPage(currentPage - 1)
  }

  const pages = [
    (args: any): any => (
      <animated.div style={{ ...args.style }}>
        <CartItems onClose={onClose} onCheckout={handleCheckout} />
      </animated.div>
    ),
    (args: any): any => (
      <animated.div style={{ ...args.style }}>
        <Checkout onConfirm={handleConfirm} onBack={handleToPrev} />
      </animated.div>
    ),
    (args: any): any => (
      <animated.div style={{ ...args.style }}>
        <OrderSuccess onClose={onClose} />
      </animated.div>
    )
  ]

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={isOpen}
      // open
      classes={{
        root: classes.root,
        paper: classes.drawer
      }}
    >
      <div className={classes.root}>
        <div className={classes.box}>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })}
        </div>
      </div>
    </Drawer>
  )
}

export default React.memo(Cart)
