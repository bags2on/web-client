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
      willChange: 'transform',
      '-webkit-tap-highlight-color': 'transparent'
    }
  }
}))

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const classes = useStyles()

  const pagesAmount = 3
  const [[index, dir], setIndex] = useState<[number, number]>([2, 0])

  const slideNext = () => setIndex([(index + 1) % pagesAmount, 1])
  const slidePrev = () => setIndex([(index - 1 + pagesAmount) % pagesAmount, -1])

  const transitions = useTransition(index, (p) => p, {
    unique: true,
    from: { transform: `translate3d(${dir === 1 ? 100 : -100}%,0,0)` },
    enter: { transform: 'translate3d(0%,0,0)' },
    leave: { transform: `translate3d(${dir === 1 ? -100 : 100}%,0,0)` },
    config: config.default
  })

  const handleCheckout = (): void => {
    slideNext()
  }

  const handleConfirm = (): void => {
    slideNext()
  }
  const handleToPrev = (): void => {
    slidePrev()
  }

  const handleOrderFinish = () => {
    setIndex([0, 0])
    onClose()
  }

  const pages = [
    <CartItems key={1} onClose={onClose} onCheckout={handleCheckout} />,
    <Checkout key={2} onConfirm={handleConfirm} onBack={handleToPrev} />,
    <OrderSuccess key={3} onClose={handleOrderFinish} />
  ]

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={isOpen}
      classes={{
        root: classes.root,
        paper: classes.drawer
      }}
    >
      <div className={classes.root}>
        {isOpen && (
          <div className={classes.box}>
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={{ ...props }}>
                {pages[item]}
              </animated.div>
            ))}
          </div>
        )}
      </div>
    </Drawer>
  )
}

export default React.memo(Cart)
