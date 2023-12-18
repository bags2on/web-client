import React from 'react'
import { getColorByTagName } from '@/utils/styling'

import styles from './Tags.module.scss'

interface TagsProps {
  tags: string[]
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <ul className={styles.container}>
      {tags.map((tag: string, index: number) => (
        <li
          key={index}
          className={styles.tag}
          style={{
            backgroundColor: getColorByTagName(tag)
          }}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tags
