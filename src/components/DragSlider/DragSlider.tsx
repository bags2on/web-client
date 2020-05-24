import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core'
import { motion, useMotionValue } from 'framer-motion'
import { IntersectionObserver } from './IntersectionObserver'
import { FadeInBox } from './FadeInBox'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

interface DragSliderProps {
  children: React.ReactNode
}

const DragSlider: React.FC<DragSliderProps> = ({ children }) => {
  const [constraintsCount, setConstraintsCount] = useState<number>(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState<number>(0)
  const [sliderWidth, setSliderWidth] = useState<number>(0)

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  const x = useMotionValue(0)
  const classes = useStyles()

  const bounceStiffness = 100
  const bounceDamping = 10

  useEffect(() => {
    const calcSliderChildrenWidth = (): void => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce((acc: number, node: any) => acc + node.clientWidth, 0)
      )
    }

    calcSliderChildrenWidth()

    const calcSliderWidth = (): void => {
      setSliderWidth(ref.current.clientWidth)
    }

    calcSliderWidth()
    window.addEventListener('resize', calcSliderWidth)

    const calcSliderConstraints = (): void => {
      setConstraintsCount(sliderChildrenWidth - sliderWidth)
    }

    calcSliderConstraints()
    window.addEventListener('resize', calcSliderConstraints)
  }, [ref, sliderChildrenWidth, sliderWidth])

  //   const SliderWrapper: React.FC = ({ children }) => {
  //     return (
  //       <div style={{ overflowX: 'hidden' }}>
  //         <motion.div
  //           ref={ref}
  //           drag="x"
  //           initial={{ x: 0 }}
  //           style={{ x }}
  //           dragConstraints={{
  //             left: -constraintsCount,
  //             right: 0
  //           }}
  //           dragTransition={{
  //             bounceStiffness,
  //             bounceDamping
  //           }}
  //         >
  //           {children}
  //         </motion.div>
  //       </div>
  //     )
  //   }

  return (
    <motion.div
      className={classes.root}
      ref={ref}
      drag="x"
      initial={{ x: 0 }}
      style={{ x }}
      dragConstraints={{
        left: -constraintsCount,
        right: 0
      }}
      dragTransition={{
        bounceStiffness,
        bounceDamping
      }}
    >
      {React.Children.map(children, (child: any) => (
        <IntersectionObserver reset={false}>
          <FadeInBox yOffset={0} duration={0.25}>
            {React.cloneElement(child)}
          </FadeInBox>
        </IntersectionObserver>
      ))}
    </motion.div>
  )
}

export default DragSlider
