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
        {images.map((image, index) => (
          <ListItem key={index} $active={index === activeIndex} onClick={() => onChange(index)}>
            <Image src={image} alt={`боковое фото продукта №${index + 1}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Thumbs
