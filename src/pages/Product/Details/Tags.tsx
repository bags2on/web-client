import React from 'react'
import clsx from 'clsx'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core'
import { getColorByTagName } from '../../../utils/styling'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: 0,
    paddingBottom: 7
  },
  item: {
    width: 'auto',
    padding: '1px 4px',
    fontSize: 14,
    color: '#fff',
    fontWeight: 600,
    marginRight: 5,
    borderRadius: 2
  }
}))

interface TagsProps {
  tags: string[]
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {tags.map((tag: string, index: number) => (
        <ListItem
          key={index}
          className={clsx(classes.item)}
          style={{
            background: getColorByTagName(tag)
          }}
        >
          {tag}
        </ListItem>
      ))}
    </List>
  )
}

export default Tags
