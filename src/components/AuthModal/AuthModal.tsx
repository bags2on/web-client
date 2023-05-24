import React from 'react'
import Modal from '../../shared/Modal'
// import AuthPatternImage from '../../assets/rastr/animal-pattern.jpeg'
import { useReactiveVar } from '@apollo/client'
import { SharedMutations } from '../../apollo/cache/mutations'
import { authModalVar } from '../../apollo/cache/variables'
// import { ReactComponent as GoogleLogoImage } from '../../assets/svg/google_logo.svg'
// import { ReactComponent as InstagramIcon } from '../../assets/svg/icons/instagram.svg'

import { Container } from './AuthModal.styled'

const AuthModal: React.FC<{ children?: React.ReactNode }> = () => {
  const isModalOpen = useReactiveVar(authModalVar)

  const handleClose = (): void => {
    SharedMutations.closeAuthModal()
  }

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Container></Container>
    </Modal>
  )
}

export default AuthModal
