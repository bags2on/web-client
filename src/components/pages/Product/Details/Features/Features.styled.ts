import SvgIcon from '@/shared/SvgIcon'
import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-top: 30px;
  padding: 15px 20px 5px 20px;
  list-style: none;
  border-radius: 10px;
  box-shadow: 0px 1px 9px -1px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  background-color: ${({ theme }) => (theme.type === 'dark' ? '#363636' : '#fff')};
`

export const Feature = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 50%;
  font-size: 17px;
  margin-bottom: 17px;
  @media ${({ theme }) => theme.media.md} {
    justify-content: flex-start;
  }
`

export const FeatureIcon = styled(SvgIcon)`
  font-size: 40px;
  margin-right: 20px;

  fill: ${({ theme }) => (theme.type === 'dark' ? '#c0c0c0' : '#343434')};
`

export const FeatureInfo = styled.div`
  & p {
    font-size: 14px;
    color: #939191;
    margin: 0;
    user-select: none;
  }
  & span {
    font-size: 16px;
  }
`
