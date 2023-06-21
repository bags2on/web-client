import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#343434')};
  max-width: 400px;
`
