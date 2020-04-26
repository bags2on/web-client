import React from 'react'
import PreviewBox from './PreviewBox/PreviewBox'
import Summary from './Summary/Summary'

const ProductDetails: React.FC = props => {
  return (
    <div>
      <PreviewBox />
      <Summary />
    </div>
  )
}

export default ProductDetails
