// TODO: unused component

import React from 'react'
import styled from 'styled-components'

interface PaginationProps {
  len: number
  current: number
  onPaginationChange(index: number): void
}

const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
  @media ${({ theme }) => theme.media.md} {
    display: none;
  }
`

const PaginationItem = styled.li<{ $active: boolean }>`
  cursor: pointer;
  align-items: center;
  background: 0 0;
  border-radius: 0;
  display: flex;
  height: 10px;
  margin-right: 8px;
  opacity: 1;
  width: 100%;
  font-size: 0;
  -webkit-tap-highlight-color: transparent;
  &:last-child {
    margin: 0;
  }
  &:before {
    content: '';
    border-radius: 3px;
    background: ${({ $active }) => ($active ? '#ffa800' : '#dedede')};
    height: ${({ $active }) => ($active ? '3px' : '2px')};
    width: 100%;
    transition: 0.3s;
  }
`

const Pagination: React.FC<PaginationProps> = ({ len, current, onPaginationChange }) => {
  return (
    <PaginationList>
      {[...Array(len).fill(0)].map((_, index) => (
        <PaginationItem
          $active={index === current}
          key={index}
          onClick={() => onPaginationChange(index)}
        />
      ))}
    </PaginationList>
  )
}

export default Pagination
