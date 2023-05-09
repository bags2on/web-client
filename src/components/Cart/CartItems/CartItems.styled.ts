import styled from 'styled-components'
import Button from '../../../shared/Button/Button'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const ProductsList = styled.ul`
  margin: 0;
  padding: 20px 10px 0 10px;
  list-style: none;
`

export const ClearButton = styled(Button)`
  display: block;
  font-size: 16px;
  padding: 10px;
  font-weight: 400;
  text-transform: none;
  background: none;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#f2f2f2')};
  margin-left: auto;
  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }
`

export const ContentLoaderList = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 30px;
  list-style: none;
  width: 100%;
  & li {
    width: 100%;
  }
`
