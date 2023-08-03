import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface LinkBadgeProps {
  top?: number
  right?: number
}

export const LinkMark = styled.div<{
  $top: number
  $right: number
}>`
  position: absolute;
  z-index: 300;
  top: ${({ $top }) => $top}px;
  right: ${({ $right }) => $right}px;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
`

export const LinkMarkImage = styled(Image)`
  display: block;
  width: 23px;
  height: 23px;
  transform: rotate(40deg);
  transition: transform 0.3s;
`

const LinkBadge: React.FC<LinkBadgeProps> = ({ top = 10, right = 13 }) => {
  return (
    <LinkMark $top={top} $right={right}>
      <LinkMarkImage width={25} height={25} src="/assets/icons/expand-arrow.svg" alt="TODO" />
    </LinkMark>
  )
}

export default LinkBadge
