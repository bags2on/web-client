import React from 'react'
import StyledModal from 'styled-react-modal'

interface SomethingWrongProps {
  open: boolean
}

const SomethingWrong: React.FC<SomethingWrongProps> = ({ open }) => {
  return <StyledModal isOpen={false}>SomethingWrong Modal</StyledModal>
}

export default SomethingWrong
