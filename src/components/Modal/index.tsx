import React from 'react'
import ReactModal from 'react-modal'

import styles from './Modal.module.scss'

interface ModalProps {
  open: boolean
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, children }) => {
  return (
    <ReactModal isOpen={open} className={styles.content} overlayClassName={styles.overlay}>
      {children}
    </ReactModal>
  )
}

export default Modal
