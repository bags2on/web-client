import styled, { css } from 'styled-components'
import { Field } from 'formik'

export const Container = styled.section`
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#323232')};
  border-radius: 10px;
  @media ${({ theme }) => theme.media.lg} {
    background-color: transparent;
    border-radius: 0;
  }
`

export const DeliveriesList = styled.ul`
  display: flex;
  margin: 0;
  padding: 15px 0;
  list-style: none;
  margin-bottom: 15px;
`

export const DeliveriesItem = styled.li`
  flex-basis: 33%;
  margin-right: 7px;
  -webkit-tap-highlight-color: transparent;
  @media ${({ theme }) => theme.media.xl} {
    flex-basis: 25%;
    margin-right: 15px;
  }
`

export const ServiceLabel = styled.label`
  display: block;
`

const hiddenStyles = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`

export const DeliveryService = styled.div`
  position: relative;
  height: 83px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #d7d7d7;
  padding: 10px 10px;
  transition: border-color 0.3s;
  background-color: #fff;
  &:hover {
    border-color: var(--green-light);
  }
  &::before {
    content: '';
    z-index: 10;
    position: absolute;
    top: 7px;
    left: 7px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #aeaeae;
    opacity: 0;
    // transform: 'scale(0)', // TODO: bounce?
    transition: 0.25s ease;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
`

export const DeliveryInput = styled(Field)`
  ${hiddenStyles}
  &:checked + ${DeliveryService} {
    border-color: var(--green-light);
    background-color: ${({ theme }) => (theme.type === 'light' ? 'rgba(50, 205, 50, .2)' : '#fff')};
    &::before {
      transform: scale(1);
      opacity: 1;
      background-color: var(--green-light);
      border-color: var(--green-light);
    }
  }
  &:disabled + ${DeliveryService} {
    cursor: not-allowed;
    border-color: rgb(149 149 149 / 20%);
    background-color: rgb(149 149 149 / 20%);
  }
`

export const AnimatedBox = styled.div`
  padding: 0 10px;

  @media ${({ theme }) => theme.media.lg} {
    padding: 0 5px;
    opacity: 1 !important;
    height: auto !important;
  }
`
