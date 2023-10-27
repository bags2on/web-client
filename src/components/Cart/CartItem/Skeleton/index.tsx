import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
  return (
    <li>
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
  )
}

export default Skeleton
