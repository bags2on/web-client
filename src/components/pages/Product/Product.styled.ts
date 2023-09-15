import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 5px;
  @media ${({ theme }) => theme.media.lg} {
    padding: 0 25px;
  }
`

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const BREAKPOINT = 770

export const PreviewWrapper = styled.div`
  flex-grow: 0;
  flex-basis: 100%;
  max-width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    flex-basis: 50%;
    max-width: 50%;
  }

  @media ${({ theme }) => theme.media.xl} {
    flex-basis: 60%;
    max-width: 60%;
  }
`

export const DetailsWrapper = styled.div`
  flex-grow: 0;
  flex-basis: 100%;
  max-width: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    flex-basis: 50%;
    max-width: 50%;
  }

  @media ${({ theme }) => theme.media.xl} {
    flex-basis: 40%;
    max-width: 40%;
  }
`
