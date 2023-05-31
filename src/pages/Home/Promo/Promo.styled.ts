import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.section`
  display: flex;
  padding: 0 5px 10px 5px;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ImageBox = styled.div`
  width: 100%;
  max-width: 175px;
  user-select: none;
  transition: all 0.3s;
  & > img {
    width: 100%;
    height: 100%;
  }
`

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
  display: flex;
  overflow: hidden;
  flex-basis: 100%;
  height: 250px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#363636')};
  -webkit-tap-highlight-color: transparent;

  @media ${({ theme }) => theme.media.md} {
    flex-basis: 49%;
    padding: 0;
    &:hover {
      & ${ImageBox} {
        transform: scale(1.1);
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  user-select: none;
  padding-top: 75px;
`

export const ContentTitle = styled.p`
  font-size: 23px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  user-select: none;
`

export const ButtonWrapper = styled.div`
  margin-top: 17px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const FakeButton = styled.div`
  display: inline-block;
  font-weight: 600px;
  padding: 8px 10px;
  border-radius: 16px;
  border: 1px solid;
  border-color: ${({ theme }) => (theme.type === 'light' ? '#343434' : theme.colors.primary)};
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => (theme.type === 'light' ? '#343434' : theme.colors.primary)};
    color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#343434')};
  }
`
