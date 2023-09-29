import React from 'react'
import ContentLoader from 'react-content-loader'
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
}

const ListSkeleton: React.FC<ListSkeletonProps> = ({ itemsAmount }) => {
  const itemsLength = itemsAmount > 4 ? 4 : itemsAmount

  return (
    <List>
      {[...Array(itemsLength)].map((_, index: number) => (
        <li key={index}>
          <ContentLoader
            backgroundColor="#eeeeee"
            foregroundColor="#e1e1e1"
            width="100%"
            height="171"
            viewBox="0 0 400 171"
          >
            <rect x="20" y="5" rx="6" ry="6" width="130" height="155" />
            <rect x="190" y="25" rx="6" ry="6" width="190" height="21" />
            <rect x="190" y="63" rx="6" ry="6" width="130" height="20" />
            <rect x="190" y="94" rx="6" ry="6" width="85" height="20" />
          </ContentLoader>
        </li>
      ))}
    </List>
  )
}

export default ListSkeleton
