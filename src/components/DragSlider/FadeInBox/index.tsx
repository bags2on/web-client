import React, { useContext, useMemo, useState, useEffect } from 'react'

import { IntersectionContext } from '../IntersectionObserver'
import MotionBox from '../MotionBox'

interface FadeInBoxProps {
  yOffset: number // y initial possition
  easing?: number[] // // [number, number, number, number] | "linear" | "easeIn" ...
  duration: number
  delayOrder?: any // ???
}

export const FadeInBox: React.FC<FadeInBoxProps> = ({
  children,
  yOffset = 24,
  easing = [0.42, 0, 0.58, 1],
  delayOrder // order of appearance
}) => {
  const { inView } = useContext(IntersectionContext)
  const [delay, setDelay] = useState<number>(0.25)

  const offset = 0.4

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * offset)
  }, [delayOrder, offset])

  const transition = useMemo(
    () => ({
      duration: 0.4,
      delay,
      ease: easing
    }),
    [delay, easing]
  )

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition
    }
  }

  return (
    <MotionBox initial="hidden" animate={inView ? 'show' : 'hidden'} exit="hidden" variants={variants}>
      {children} {inView}
    </MotionBox>
  )
}
