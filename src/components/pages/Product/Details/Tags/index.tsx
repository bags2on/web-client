import React from 'react'
import { getColorByTagName } from '@/utils/styling'

import { Container, Tag } from './Tags.styled'

interface TagsProps {
  tags: string[]
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Container>
      {tags.map((tag: string, index: number) => (
        <Tag key={index} $background={getColorByTagName(tag)}>
          {tag}
        </Tag>
      ))}
    </Container>
  )
}

export default Tags
