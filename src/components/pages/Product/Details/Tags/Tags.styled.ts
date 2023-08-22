import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 10px 0;
`

export const Tag = styled.li<{ $background: string }>`
  width: auto;
  padding: 1px 4px;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  margin-right: 5px;
  border-radius: 2px;
  background-color: ${({ $background }) => $background};
`
