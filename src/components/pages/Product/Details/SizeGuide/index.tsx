import React from 'react'
import { Title, List, ListItem } from './SizeGuide.styled'

type availableSizes = 'S' | 'M' | 'L' | 'XL' | '2XL'

interface SizeGuideProps {
  current: availableSizes
  available: Array<availableSizes>
}

const SizeGuide: React.FC<SizeGuideProps> = ({ current, available }) => {
  const sizes = ['S', 'M', 'L', 'XL', '2XL']

  const normalized = available.reduce((acc, size) => ({ ...acc, [size]: undefined }), {})

  return (
    <div>
      <Title>Выбрать размер</Title>
      <List>
        {sizes.map((size) => (
          <ListItem
            key={size}
            $active={size === current}
            $inactive={!Object.prototype.hasOwnProperty.call(normalized, size)}
          >
            {size}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SizeGuide
