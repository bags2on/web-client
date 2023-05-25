import styled, { css, keyframes } from 'styled-components'

export const Picture = styled.picture<{ $plain: boolean }>`
  display: block;
  outline: none;
  position: relative;
  overflow: hidden;
  transform: translatez(0);
  padding-top: ${({ $plain }) => ($plain ? '0px' : '100%')};
  height: ${({ $plain }) => ($plain ? '100%' : 'auto')};
`

const shineKeyframes = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position:  -135% 0%;   
  }
`

export const Shine = styled.div<{ $plain: boolean }>`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
  background-size: 300% 300%;
  opacity: 0.8;
  animation: ${shineKeyframes} 1.3s infinite;
  border-top-left-radius: ${({ $plain }) => ($plain ? '0' : '8px')};
  border-top-right-radius: ${({ $plain }) => ($plain ? '0' : '8px')};
`

export const PlaceholderBox = styled.div`
  position: absolute;
  outline: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const areaStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  outline: none;
  object-fit: cover;
  user-select: none;
`

export const Image = styled.img`
  ${areaStyles}
`

export const PlaceholderContainer = styled.div`
  ${areaStyles}
`
