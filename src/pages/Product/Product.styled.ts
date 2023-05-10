import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  max-width: 1300px;
  margin: 0 auto;
`

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const PreviewWrapper = styled.div`
  flex-grow: 0;
  flex-basis: 100%;
  max-width: 100%;
  @media ${({ theme }) => theme.media.lg} {
    flex-basis: 58.33%;
    max-width: 58.33%;
  }
`

export const DetailsWrapper = styled.div`
  flex-grow: 0;
  flex-basis: 100%;
  max-width: 100%;
  @media ${({ theme }) => theme.media.lg} {
    flex-basis: 41.66%;
    max-width: 41.66%;
  }
`

export const Loader = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
