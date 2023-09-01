import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Box, Backdrop } from './Drawer.styled'

interface DrawerProps {
  open: boolean
  position?: 'left' | 'right'
  onClose(): void
  children?: React.ReactNode
}

const Drawer: React.FC<DrawerProps> = ({ open, children, onClose, position = 'left' }) => {
  const [mounted, setMounted] = useState(false)

  const bodyContainerRef = useRef<HTMLElement | null>(null)
  const portalRootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    bodyContainerRef.current = document.getElementById('app-drawers')
    portalRootRef.current = document.createElement('div')

    let portal: HTMLElement

    if (bodyContainerRef.current) {
      bodyContainerRef.current.appendChild(portalRootRef.current)
      portal = portalRootRef.current
    }

    setMounted(true)

    return () => {
      portal.remove()
    }
  }, [])

  useEffect(() => {
    const updatePageScroll = () => {
      if (open) {
        document.documentElement.style.overflowY = 'scroll'
        document.documentElement.style.position = 'fixed'
        document.documentElement.style.width = '100%'
      } else {
        document.documentElement.style.overflowY = 'auto'
        document.documentElement.style.position = 'static'
        document.documentElement.style.width = 'auto'
      }
    }

    updatePageScroll()
  }, [open])

  return mounted
    ? createPortal(
        <div>
          <Box $open={open} $pos={position}>
            {children}
          </Box>
          <Backdrop $open={open} onClick={onClose} />
        </div>,
        portalRootRef.current as Element
      )
    : null
}

export default Drawer
