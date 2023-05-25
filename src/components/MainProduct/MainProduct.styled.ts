import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  position: relative;
  margin-left: auto;
  overflow: hidden;
  border-radius: 20px;
  flex-basis: 30%;
`

const bgAnimation = keyframes`   
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const AnimatedBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  background-size: 400% 400%;
  animation: ${bgAnimation} 6s infinite;
`

export const InnerBox = styled(Link)`
  width: 100%;
  padding: 10px 10px 10px 10px;
  display: block;
  height: 100%;
  z-index: 10;
  min-height: 100px;
  max-height: 400px;
  transition: all 0.2s;
`
export const Image = styled.img`
  position: relative;
  width: 50%;
  margin: 0 auto;
  display: block;
  height: auto;
  user-select: none;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`

export const PriceBox = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20%;
  left: 20%;
  border-radius: 6px;
  padding: 5px 0px 5px 20px;
  backdrop-filter: blur(3px);
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.2);
  @media ${({ theme }) => theme.media.tablet} {
    right: 10%;
    left: 10%;
  }
`

export const Price = styled.p`
  text-align: center;
  color: #fff;
  font-size: 1.9rem;
  margin: 0;
  & span {
    color: #f5e700;
    font-weight: 500;
    margin-left: 3px;
    font-size: 18px;
    vertical-align: super;
  }
  @media ${({ theme }) => theme.media.xl} {
    font-size: 30px;
    & span {
      font-size: 23px;
    }
  }
`

export const Title = styled.p`
  position: absolute;
  top: 14px;
  left: 14px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`
