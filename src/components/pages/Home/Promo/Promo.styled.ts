import styled, { css } from 'styled-components'
import Link from 'next/link'
import { LinkMarkImage } from '@/shared/LinkBadge'

export const Container = styled.section`
  display: flex;
  padding: 0 10px 10px 10px;

  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1500px;
  margin: 0 auto;
`

export const ImageBox = styled.div`
  width: 100%;
  user-select: none;
  transition: all 0.3s;
  & > img {
    width: 100%;
    height: 100%;
  }
`

export const LinkWrapper = styled(Link)`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  margin-top: 10px;
  display: flex;
  overflow: hidden;
  flex-basis: 100%;
  border-radius: 12px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  background-color: #f3f3f3;
  -webkit-tap-highlight-color: transparent;
  @media ${({ theme }) => theme.media.tablet} {
    flex-basis: 49%;
    padding: 0;
    &:hover {
      & ${LinkMarkImage} {
        transform: translate(2px, -10%) rotate(40deg);
      }

      & ${ImageBox} {
        transform: scale(1.1);
      }
    }
  }
`

const contentStyles = css`
  position: absolute;
  user-select: none;
  top: 50%;
  left: 47%;
  transform: translate(0, -50%);
`

export const FirstContent = styled.div`
  ${contentStyles}
  left: 55%;
`

export const SecondContent = styled.div`
  ${contentStyles}
`

export const ContentTitle = styled.p`
  font-size: 23px;
  font-weight: 500;
  margin: 0;
  color: #343434;
  user-select: none;
  text-align: center;
  margin-bottom: 3px;
`

export const ButtonWrapper = styled.div`
  margin-top: 17px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const FakeButton = styled.div`
  display: inline-block;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 14px;
  border: 1px solid #343434;
  color: #343434;
  transition: all 0.2s;
  background-color: transparent;
  @media ${({ theme }) => theme.media.tablet} {
    color: #fff;
    background-color: #343434;
    &:hover {
      color: #343434;
      background-color: transparent;
    }
  }
`
