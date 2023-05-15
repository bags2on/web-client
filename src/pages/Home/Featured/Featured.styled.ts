import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 15px 0 5px 10px;
`

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListItem = styled.li`
  padding: 1px;
  flex-basis: 50%;
  flex-grow: 0;
  @media ${({ theme }) => theme.media.md} {
    flex-basis: 33.333333%;
    max-width: 33.333333%;
  }
  @media ${({ theme }) => theme.media.lg} {
    max-width: 25%;
    flex-basis: 25%;
  }
`
