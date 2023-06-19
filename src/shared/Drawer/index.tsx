import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { Box, Backdrop } from './Drawer.styled'

interface DrawerProps {
  open: boolean
  position?: 'left' | 'right'
  onClose(): void
  children?: React.ReactNode
}

function createPortalRoot(id: string): HTMLDivElement {
  const drawerRoot = document.createElement('div')
  drawerRoot.setAttribute('id', id)
  return drawerRoot
}

function getPortalID(): string {
  return 'drawer-' + new Date().getTime()
}

const Drawer: React.FC<DrawerProps> = ({ open, children, onClose, position = 'left' }) => {
  const [mounted, setMounted] = useState(false)

  const bodyRef = useRef<HTMLElement | null>(null)

  const portalRootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const portalID = getPortalID()

    bodyRef.current = document.getElementById('app-drawers')
    portalRootRef.current = createPortalRoot(portalID)

    let portal: HTMLElement

    if (bodyRef.current) {
      bodyRef.current.appendChild(portalRootRef.current)
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
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
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
        portalRootRef.current
      )
    : null
}

export default Drawer
