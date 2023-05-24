import styled from 'styled-components'

export const Container = styled.section`
  width: inherit;
  padding-top: 2px;
`

export const ProductList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  margin: 8px 0;
  flex-basis: 100%;
  @media ${({ theme }) => theme.media.md} {
    flex-basis: 50%;
  }
  @media ${({ theme }) => theme.media.laptop} {
    flex-basis: 100%;
  }
`
