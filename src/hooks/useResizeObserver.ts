import { useState, useLayoutEffect, useCallback, RefObject } from 'react'

interface DOMRectReadOnly {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
  readonly top: number
  readonly right: number
  readonly bottom: number
  readonly left: number
  toJSON(): void
}

interface ResizeObserverEntry {
  readonly target: Element
  readonly contentRect: DOMRectReadOnly
}

interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[], observer: ResizeObserver): void
}

interface ResizeObserver {
  observe(target: Element): void
  unobserve(target: Element): void
  disconnect(): void
}

declare let ResizeObserver: {
  prototype: ResizeObserver
  new (callback: ResizeObserverCallback): ResizeObserver
}

export const useResizeObserver = (
  ref: RefObject<HTMLElement>,
  cb?: (entry: DOMRectReadOnly) => void
): [number, number] => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const handleResize = useCallback(
    (entries: any[]) => {
      if (!Array.isArray(entries)) {
        return
      }

      const entry = entries[0]
      setWidth(entry.contentRect.width)
      setHeight(entry.contentRect.height)

      if (cb) {
        cb(entry.contentRect)
      }
    },
    [cb]
  )

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    const size = new ResizeObserver((entries) => handleResize(entries))
    size.observe(ref.current)

    return (): void => {
      size.disconnect()
    }
  }, [ref, handleResize])

  return [width, height]
}
