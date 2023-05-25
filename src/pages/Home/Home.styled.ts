import styled, { css } from 'styled-components'

const containerStyles = css`
  max-width: 1500px;
  margin: 0 auto;
`

export const SliderContainer = styled.div`
  ${containerStyles}
  display: flex;
  @media ${({ theme }) => theme.media.lg} {
    padding: 0 5px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    padding: 16px 10px 0 10px;
  }
  & section:nth-of-type(2) {
    display: none;
    @media ${({ theme }) => theme.media.tablet} {
      display: block;
    }
  }
`

export const HomeContainer = styled.div`
  ${containerStyles}
  display: flex;
  flex-direction: column-reverse;
  padding: 20px 10px 0 10px;
  @media ${({ theme }) => theme.media.laptop} {
    flex-direction: initial;
  }
`

export const MainProductContainer = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`

export const SideListContainer = styled.div`
  flex-basis: 100%;
  @media ${({ theme }) => theme.media.md} {
    flex-basis: 25%;
  }
`

export const SubBox = styled.div`
  flex-basis: 100%;
  @media ${({ theme }) => theme.media.md} {
    padding: 10px 0 10px 0;
    flex-basis: 75%;
  }
  @media ${({ theme }) => theme.media.laptop} {
    padding-left: 15px;
  }
`

export const PopularContainer = styled.div`
  ${containerStyles}
`
