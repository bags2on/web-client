import React from 'react'
import styled from 'styled-components'

interface styleProps {
  $fallback?: boolean
  dark?: boolean
}

const SvgEl = styled.svg<styleProps>`
  width: ${({ fallback }) => (fallback ? '34px' : '24px')};
  height: ${({ fallback }) => (fallback ? '40px' : '24px')};
  & > rect {
    fill: ${({ theme, dark }) => (dark ? '#343434' : theme.colors.primary)};
  }
`

interface LoaderProps {
  fallback?: boolean
  dark?: boolean
}

const ScaleLoader: React.FC<LoaderProps> = ({ fallback = false, dark }) => {
  return (
    <SvgEl
      $fallback={fallback}
      dark={dark}
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 30"
    >
      <rect x="0" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="13" width="4" height="5" fill="#333">
        <animate
          attributeName="height"
          attributeType="XML"
          values="5;21;5"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="13; 5; 13"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </SvgEl>
  )
}

export default ScaleLoader
