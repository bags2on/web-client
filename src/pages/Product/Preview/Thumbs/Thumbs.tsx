/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

interface ThumbsProps {
  activeIndex: number
  images: string[]
  onChange(index: number): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'none',
    marginRight: 15,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
    '&:hover:not($activeItem)': {
      border: '1px dashed #343434'
    }
  },
  activeItem: {
    border: '1px solid #343434'
  },
  slideImage: {
    borderRadius: 5,
    maxWidth: 95,
    maxHeight: 95
  }
}))

const Thumbs: React.FC<ThumbsProps> = ({ activeIndex, images, onChange }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {images.map((image, index) => (
          <li
            key={index}
            className={clsx({
              [classes.item]: true,
              [classes.activeItem]: index === activeIndex
            })}
            onClick={() => onChange(index + 1)}
          >
            <img src={image} className={classes.slideImage} alt={`боковое фото продукта №${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Thumbs
