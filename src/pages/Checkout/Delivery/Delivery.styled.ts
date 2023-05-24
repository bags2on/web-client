import styled, { css } from 'styled-components'
import SvgIcon from '../../../shared/SvgIcon'

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
