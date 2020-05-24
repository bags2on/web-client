import React, { useEffect, useState, useRef } from 'react'
import { useIntersection } from 'react-use'

export const IntersectionContext = React.createContext({ inView: true })

interface IntersectionObserverProps {
  reset: boolean // if value set to true - observed element will reappear every time it shows up on the screen
}

export const IntersectionObserver: React.FC<IntersectionObserverProps> = ({ reset, children }) => {
  const [inView, setInView] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const intersection = useIntersection(ref, {
    threshold: 0
  })

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0
    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={ref}>{children}</div>
    </IntersectionContext.Provider>
  )
}
