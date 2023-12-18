import React from 'react'
import Modal from '@/components/Modal'

interface SomethingWrongProps {
  open: boolean
}

const SomethingWrong: React.FC<SomethingWrongProps> = ({ open }) => {
  return <Modal open={false}>SomethingWrong Modal</Modal>
}

export default SomethingWrong
