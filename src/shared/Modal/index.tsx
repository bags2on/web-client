import React from 'react'
import { ReactComponent as CrossIcon } from '../../assets/svg/icons/cross.svg'
import { StyledModal, ModalInner, CloseButton, TheCloseIcon } from './Modal.styled'

interface ModalProps {
  open: boolean
  onClose(): void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <StyledModal isOpen={open}>
      <ModalInner>{children}</ModalInner>
      <CloseButton disableRipple onClick={handleClose}>
        <TheCloseIcon>
          <CrossIcon />
        </TheCloseIcon>
      </CloseButton>
    </StyledModal>
  )
}

export default Modal
