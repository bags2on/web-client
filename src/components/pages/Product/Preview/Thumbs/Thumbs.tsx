import React from 'react'

import { Container, List, ListItem, Image } from './Thumbs.styled'

interface ThumbsProps {
  activeIndex: number
  images: string[]
  onChange(index: number): void
}

const Thumbs: React.FC<ThumbsProps> = ({ activeIndex, images, onChange }) => {
  return (
    <Container>
      <List>
        {images.map((url, index) => (
          <ListItem key={index} onClick={() => onChange(index)}>
            <Image
              src={url}
              alt={`навигационное фото продукта №${index + 1}`}
              $active={index === activeIndex}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Thumbs
