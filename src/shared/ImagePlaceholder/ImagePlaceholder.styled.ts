import styled, { css, keyframes } from 'styled-components'

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

export const Container = styled.div`
  display: block;
  outline: none;
  position: relative;
  overflow: hidden;
  transform: translatez(0);
  padding-top: 100%;
  height: auto;
`

const shineKeyframes = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position:  -135% 0%;   
  }
`

export const Shine = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
  background-size: 300% 300%;
  opacity: 0.8;
  animation: ${shineKeyframes} 1.3s infinite;
  border-radius: 8px;
`

export const Placeholder = styled.div`
  ${areaStyles}
`
