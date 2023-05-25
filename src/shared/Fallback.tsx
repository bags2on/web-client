import React from 'react'
import styled from 'styled-components'
import ScaleLoader from './loaders/ScaleLoader'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Fallback: React.FC = () => {
  return (
    <Container>
      <ScaleLoader fallback />
    </Container>
  )
}

export default Fallback
