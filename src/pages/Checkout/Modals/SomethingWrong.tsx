import React from 'react'
import Modal from '../../../shared/Modal'

interface SomethingWrongProps {
  open: boolean
}

const SomethingWrong: React.FC<SomethingWrongProps> = ({ open }) => {
  const hanleReloadClick = () => {
    window.location.reload()
  }

  // TODO: update shared Modal
  const onClose = () => {
    console.log('close')
  }

  return <Modal open={open} onClose={onClose}></Modal>
}

export default SomethingWrong
