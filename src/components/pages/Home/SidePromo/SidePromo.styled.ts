import styled from 'styled-components'
import Link from 'next/link'

import { iconClassname } from '@/shared/LinkBadge'

export const Container = styled(Link)`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;

  background-color: #f3f3f3;
  &:hover {
    & .${iconClassname} {
      transform: translate(2px, -10%) rotate(40deg);
    }
  }

  @media ${({ theme }) => theme.media.xl} {
    height: 100%;
  }
`

export const Info = styled.div`
  flex-grow: 1;
  padding-top: 2%;

  @media ${({ theme }) => theme.media.xl} {
    padding-top: 39%;
    padding-left: 10%;
  }
`

export const PromoTitle = styled.p`
  text-align: center;
  margin: 0;
  font-size: 27px;
  color: #343434;
  font-weight: 600;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.media.xl} {
    text-align: start;
    font-size: 2.3vw;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.media.xl} {
    justify-content: start;
  }
`

export const FakeButton = styled.div`
  display: inline-block;
  border-radius: 10px;
  padding: 8px 10px;
  font-weight: 500;
  color: #343434;
  background-color: transparent;
  border: 1px solid #343434;
  transition: all 0.2s;

  @media ${({ theme }) => theme.media.tablet} {
    color: #fff;
    background-color: #343434;
    &:hover {
      color: #343434;
      background-color: transparent;
    }
  }
  @media ${({ theme }) => theme.media.xl} {
    text-align: start;
  }
`

export const PromoPattern = styled.div`
  background-image: url('/assets/balloons-pattern.jpg');
  background-repeat: repeat-x;
  background-size: 200px;
  height: 39%;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;

  @media ${({ theme }) => theme.media.xl} {
    height: 30%;
    background-size: 300px;
    background-position: center;
    background-repeat: no-repeat;
  }
`
