import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  margin-right: 15px;
  @media ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: flex-start;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const ListItem = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 13px;
  border: ${({ $active }) => ($active ? '2px solid #343434' : 'none')};
  &:hover {
    border: 1px dashed #343434;
  }
`

export const Image = styled.img`
  border-radius: 10px;
  max-width: 95px;
  max-height: 95px;
`
