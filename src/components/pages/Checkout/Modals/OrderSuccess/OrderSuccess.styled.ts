import Link from 'next/link'
import styled from 'styled-components'
import StyledModal from 'styled-react-modal'

export const Modal = StyledModal.styled`
  background-color: #fff;
`

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;

  @media ${({ theme }) => theme.media.md} {
    padding: 0 50px;
    height: 570px;
  }

  @media ${({ theme }) => theme.media.lg} {
    display: flex;
    align-items: center;
  }

  @media ${({ theme }) => theme.media.laptop} {
    width: 900px;
    padding: 0;
  }
`

export const ImageBox = styled.div`
  padding-top: 75px;
  @media ${({ theme }) => theme.media.lg} {
    padding-top: 0;
    margin-right: 50px;
  }
  @media ${({ theme }) => theme.media.laptop} {
    margin-right: 0;
    flex-basis: 50%;
  }
`

export const SvgImage = styled.div`
  width: 133px;
  margin: 0 auto;
  @media ${({ theme }) => theme.media.lg} {
    width: 175px;
  }
`

export const OrderInfo = styled.div`
  padding: 30px 10px 0 10px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  text-align: center;
`

export const SubTitle = styled.div`
  width: 240px;
  margin: 0 auto;
  text-align: center;
  & p {
    margin: 0;
    font-size: 13px;
    line-height: 15px;
    color: ${({ theme }) => (theme.type === 'light' ? '#676767' : '#e7e7e7')};
  }
`

export const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 30px;
  list-style: none;
`

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  & p {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    margin-left: 20px;
    max-width: 275px;
  }
`

export const ButtonWrapper = styled.div`
  width: 130px;
  margin: 0 auto;
  padding-top: 21px;
`

export const LinkToProfile = styled(Link)`
  font-weight: 500;
  color: var(--green-light);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
