import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { Box, Backdrop } from './Drawer.styled'

interface DrawerProps {
  open: boolean
  position?: 'left' | 'right'
  onClose(): void
  children?: React.ReactNode
}

const APP_DRAWER_PORTAL_NODE_ID = 'app-drawer-root'

function createPortalRoot() {
  const drawerRoot = document.createElement('div')
  drawerRoot.setAttribute('id', APP_DRAWER_PORTAL_NODE_ID)

  return drawerRoot
}

const Drawer: React.FC<DrawerProps> = ({ open, children, onClose, position = 'left' }) => {
  const bodyRef = useRef(document.querySelector('body'))

  const portalRootRef = useRef(document.getElementById(APP_DRAWER_PORTAL_NODE_ID) || createPortalRoot())

  useEffect(() => {
    let portal: HTMLElement
    let bodyEl: HTMLBodyElement

    if (bodyRef.current) {
      bodyRef.current.appendChild(portalRootRef.current)
      portal = portalRootRef.current
      bodyEl = bodyRef.current
    }

    return () => {
      portal.remove()
      bodyEl.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const updatePageScroll = () => {
      if (bodyRef.current) {
        if (open) {
          bodyRef.current.style.overflow = 'hidden'
        } else {
          bodyRef.current.style.overflow = ''
        }
      }
    }

    updatePageScroll()
  }, [open])

  return createPortal(
    <div>
      <Box $open={open} $pos={position}>
        {children}
      </Box>
      <Backdrop $open={open} onClick={onClose} />
    </div>,
    portalRootRef.current
  )
}

export default Drawer
