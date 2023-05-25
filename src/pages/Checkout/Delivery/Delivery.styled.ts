import styled, { css } from 'styled-components'
import SvgIcon from '../../../shared/SvgIcon'
import Button from '../../../shared/Button/Button'
import { Field } from 'formik'

export const Container = styled.section`
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#323232')};
  border-radius: 10px;
  @media ${({ theme }) => theme.media.lg} {
    background-color: transparent;

    borderradius: 0;
  }
`

export const TitleWrapper = styled.div<{ $expand: boolean }>`
  position: relative;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#e1e1e1' : '#343434')};
  padding: 20px 10px 37px 10px;
  border-radius: 10px;
  transition: all 0.3s;

  @media ${({ theme }) => theme.media.lg} {
    background-color: transparent;
    padding: 0;
  }

  ${({ $expand }) =>
    $expand &&
    css`
      background-color: transparent;
      justify-content: flex-start;
      margin-bottom: 0;
      padding-bottom: 0;
    `}
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 10px;
  & > h2 {
    margin: 0;
  }
  @media ${({ theme }) => theme.media.lg} {
    justify-content: center;
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.xl} {
    justify-content: start;
  }
`

export const ThePinIcon = styled(SvgIcon)<{ $valid: boolean }>`
  font-size: 32px;
  line-height: 22px;
  fill: ${({ $valid }) => ($valid ? 'limegreen' : '#979797')};
  margin-right: 7px;
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
  margin: 0 5px;
  -webkit-tap-highlight-color: transparent;
  -moz-appearance: none;
  -webkit-appearance: none;
  @media ${({ theme }) => theme.media.xl} {
    flex-basis: 25%;
    margin: 0 10px;
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

export const ImageWrapper = styled.div`
  height: 83px;
  cursor: pointer;
  position: relative;
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

export const DeliveryInput = styled(Field)`
  ${hiddenStyles}
  &:checked + ${ImageWrapper} {
    border-color: var(--green-light);
    background-color: ${({ theme }) => (theme.type === 'light' ? 'rgba(50, 205, 50, .2)' : '#fff')};
    &::before {
      transform: scale(1);
      opacity: 1;
      background-color: var(--green-light);
      border-color: var(--green-light);
    }
  }
`

export const EditPlug = styled.span<{ $hide: boolean }>`
  display: ${({ $hide }) => ($hide ? 'none' : 'block')};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  color: var(--green-light);
  border-radius: 10px;
  border: 2px solid var(--green-light);
  padding: 5px 7px;
  font-weight: 600;

  @media ${({ theme }) => theme.media.lg} {
    display: none;
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

export const FormField = styled.div`
  width: 100%;
  & > span {
    font-size: 15px;
    color: ${({ theme }) => (theme.type === 'light' ? '#6a6a6a' : '#fff')};
    font-weight: 500;
    padding-left: 7px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 1000px) {
    max-width: 300px;
  }
`

export const AreaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.xl} {
    justify-content: flex-start;
  }
`

export const ContinueButton = styled(Button)`
  background-color: var(--green-light);
  &:hover {
    background-color: var(--green-light);
  }

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`
