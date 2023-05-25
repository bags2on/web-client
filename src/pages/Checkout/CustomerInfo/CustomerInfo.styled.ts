import styled, { css } from 'styled-components'
import SvgIcon from '../../../shared/SvgIcon'
import Button from '../../../shared/Button/Button'
import { animated } from 'react-spring'

export const Container = styled.section`
  margin-bottom: 30px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#323232')};
  border-radius: 10px;

  @media ${({ theme }) => theme.media.lg} {
    background-color: transparent;
    border-radius: 0;
  }
`

export const AnimatedBox = styled.div`
  padding: 0 17px;

  @media ${({ theme }) => theme.media.lg} {
    padding: 0 5px;
    opacity: 1 !important;
    height: auto !important;
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
  margin-bottom: 20px;
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

export const TheAvatarIcon = styled(SvgIcon)<{ $valid: boolean }>`
  font-size: 32px;
  line-height: 22px;
  fill: ${({ $valid }) => ($valid ? 'limegreen' : '#979797')};
  margin-right: 7px;
`

export const FieldsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.xl} {
    max-width: 560px;
  }
`

export const Field = styled.div`
  flex-basis: 100%;
  & > span {
    font-size: 15px;
    color: ${({ theme }) => (theme.type === 'light' ? '#6a6a6a' : '#fff')};
    font-weight: 500px;
    padding-left: 7px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 1000px) {
    flex-basis: 48%;
  }
`

export const Divider = styled.div`
  @media ${({ theme }) => theme.media.lg} {
    margin-top: 15px;
    border-bottom: 2px solid;
    border-bottom-color: ${({ theme }) => (theme.type === 'light' ? '#dcdcdc' : '#646464')};
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
