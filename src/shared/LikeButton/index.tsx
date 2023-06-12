import React from 'react'

import { Button, Svg } from './LikeButton.styled'

interface LikeButtonProps {
  liked: boolean
  width?: number
  height?: number
  className?: string
  onClick: (e: React.MouseEvent) => void
}

const LikeButton: React.FC<LikeButtonProps> = ({ liked, className, width = 20, height = 20, ...restProps }) => {
  return (
    <Button {...restProps}>
      <Svg $liked={liked} $width={width} $height={height} viewBox="0 0 24 24">
        <use xlinkHref="#heart" />
        <use xlinkHref="#heart" />
      </Svg>
      <Svg $hide $liked={liked} $width={width} $height={height} viewBox="0 0 24 24">
        <defs>
          <path
            id="heart"
            d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
          />
        </defs>
      </Svg>
    </Button>
  )
}

export default LikeButton
