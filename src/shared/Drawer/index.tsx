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
  const [mounted, setMounted] = React.useState(false)

  const bodyRef = useRef<HTMLElement | null>(null)
  // const bodyRef = useRef(document.querySelector('body'))

  const portalRootRef = useRef<HTMLElement | null>(null)
  // const portalRootRef = useRef(document.getElementById(portalID) || createPortalRoot(portalID))

  useEffect(() => {
    const portalID = getPortalID()

    bodyRef.current = document.getElementById('app-drawers')
    portalRootRef.current = document.getElementById(portalID) || createPortalRoot(portalID)

    let portal: HTMLElement
    let bodyEl: HTMLElement

    if (bodyRef.current) {
      bodyRef.current.appendChild(portalRootRef.current)
      portal = portalRootRef.current
      bodyEl = bodyRef.current
    }

    setMounted(true)

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
