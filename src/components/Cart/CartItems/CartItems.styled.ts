import styled from 'styled-components'

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
