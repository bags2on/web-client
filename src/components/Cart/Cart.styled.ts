import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  color: ${({ theme }) => (theme.type === 'light' ? '#343434' : '#fff')};
  overflow-x: hidden;
  background-color: #fff;
  max-width: 400px;
`
