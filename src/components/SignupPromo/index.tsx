import React from 'react'
import { SharedMutations } from '../../apollo/cache/mutations'
import { isAuthenticatedVar } from '../../apollo/cache/variables'
import { useReactiveVar } from '@apollo/client'

import { Container, TopBox, BottomBox } from './SignupPromo.styled'

const SignupPromo: React.FC = () => {
  const isAuthenticated = useReactiveVar(isAuthenticatedVar)

  if (isAuthenticated) return null

  const handleClick = () => {
    SharedMutations.checkAuthentication()
  }

  return (
    <Container onClick={handleClick}>
      <TopBox>
        <span>-15%</span>
      </TopBox>
      <BottomBox>
        <p>приветственный бонус</p>
        <p>на первую покупку</p>
      </BottomBox>
    </Container>
  )
}

export default SignupPromo
