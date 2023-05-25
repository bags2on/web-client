import styled from 'styled-components'
import Button from '../../../shared/Button/Button'
import IconButton from '../../../shared/IconButton'
import SvgIcon from '../../../shared/SvgIcon'

export const Container = styled.div`
  position: fixed; // INFO: fix for Chrome: https://developer.chrome.com/blog/url-bar-resizing/
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ProductsList = styled.ul`
  margin: 0;
  padding: 20px 10px 0 10px;
  list-style: none;
  flex-grow: 1;
  overflow-y: auto;
`

export const ClearButton = styled(Button)`
  display: block;
  font-size: 16px;
  padding: 10px;
  font-weight: 400;
  text-transform: none;
  background: none;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#f2f2f2')};
  text-decoration: underline;
  &:hover {
    background-color: transparent;
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

export const TopControls = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f3f3f3' : '#282828')};
`

export const CloseButton = styled(IconButton)`
  color: #8c8c8c;
  margin-left: 20px;
`

export const TheCloseIcon = styled(SvgIcon)`
  fill: '#373737';
  font-size: 17px;
`
