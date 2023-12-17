import React from 'react'
import ScaleLoader from '@/shared/loaders/ScaleLoader'

const PageLoader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ScaleLoader fallback />
    </div>
  )
}

export default PageLoader
