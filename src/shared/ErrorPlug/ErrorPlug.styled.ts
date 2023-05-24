import styled from 'styled-components'

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  height: calc(95 * var(--vh));
  justify-content: center;
  align-items: center;
`

export const ImageWrapper = styled.div`
  padding: 0 10px;
  max-width: 230px;
  margin: 0 auto;
  width: 100%;
  & > img {
    width: 100%;
  }

  @media ${({ theme }) => theme.media.lg} {
    max-width: 300px;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 21px;
  margin-top: 50px;
  @media ${({ theme }) => theme.media.md} {
    font-size: 27px;
  }
`

export const SubTitle = styled.p`
  font-size: 16px;
  text-align: center;
  color: var(--sub-title-color);
  @media ${({ theme }) => theme.media.md} {
    font-size: 20px;
  }
`
