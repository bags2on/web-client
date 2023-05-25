import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`

const JoinUs: React.FC = () => {
  return <Container></Container>
}

export default JoinUs
