import React from 'react'

import ScaleLoader from '@/shared/loaders/ScaleLoader'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader = () => {
  return (
    <Container>
      <ScaleLoader fallback />
    </Container>
  )
}

export default PageLoader
