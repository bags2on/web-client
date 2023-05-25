import React, { useEffect, useRef } from 'react'
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
  const portalID = getPortalID()

  const bodyRef = useRef(document.querySelector('body'))

  const portalRootRef = useRef(document.getElementById(portalID) || createPortalRoot(portalID))

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
