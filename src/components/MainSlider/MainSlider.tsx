import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    maxHeight: 300,
    minHeight: '240px'
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingTop: '30%',
    minHeight: '240px'
  },
  image: {
    width: '100%', // m
    maxHeight: 300,
    minHeight: '240px',
    top: 0,
    padding: 15,
    height: '100%',
    position: 'absolute',
    borderRadius: '40px'
  }
}))

const images: string[] = [
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1584278178/bags2on/zveri_pattern_z3blcb.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1584278178/bags2on/list_lazmfm.jpg',
  'https://res.cloudinary.com/dct4oinuz/image/upload/v1603389661/bags2on/third_vspxox.jpg'
]

const variants = {
  enter: (direction: number): object => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number): object => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number): number => {
  return Math.abs(offset) * velocity
}

const Example: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const classes = useStyles()

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number): void => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <section className={classes.root}>
      <div className={classes.box}>
        {/* initial={false} - without mount styles */}
        <AnimatePresence custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={classes.image}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }): void => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Example
