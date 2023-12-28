import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
  return (
    <li style={{ padding: '15px 10px 0 10px' }}>
      <ContentLoader backgroundColor="#eeeeee" foregroundColor="#e1e1e1" width="100%">
        <rect x="0" y="0" rx="8" ry="8" width="150" height="150" />
        <rect x="170" y="10" rx="8" ry="8" width="190" height="25" />
        <rect x="170" y="52" rx="8" ry="8" width="130" height="22" />
        <rect x="170" y="83" rx="8" ry="8" width="85" height="22" />
      </ContentLoader>
    </li>
  )
}

export default Skeleton
