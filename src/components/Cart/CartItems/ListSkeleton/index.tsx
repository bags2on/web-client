import React from 'react'
import CartItemSkeleton from '../../CartItem/Skeleton'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 20px;
  width: 100%;
  flex-grow: 1;
  overflow-y: hidden;
  & li {
    width: 100%;
    margin-bottom: 15px;
  }
`

interface ListSkeletonProps {
  itemsAmount: number
  max?: number
}

const ListSkeleton: React.FC<ListSkeletonProps> = ({ itemsAmount, max = 4 }) => {
  const itemsLength = itemsAmount > max ? max : itemsAmount

  return (
    <List>
      {[...Array(itemsLength)].map((_, index: number) => (
        <CartItemSkeleton key={index} />
      ))}
    </List>
  )
}

export default ListSkeleton
