import React, { useState } from 'react'
import clsx from 'clsx'
import SvgIcon from '@material-ui/core/SvgIcon'
import { hiddenStyles } from '../../utils/styling'
import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  star: {
    fill: '#c0c0c0',
    cursor: 'pointer',
    marginRight: '5px',
    transition: 'all .2s',
    '-webkit-tap-highlight-color': 'transparent',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none'
  },
  activeStar: {
    fill: '#ffc107'
  },
  hide: { ...hiddenStyles }
}))

interface RatingProps {
  starsAmount: number
  starRating?: number
}

const Rating: React.FC<RatingProps> = ({ starsAmount, starRating = 0 }) => {
  const [rating, setRating] = useState<number>(starRating)
  const [interactValue, setInteractValue] = useState<number>(0)

  const classes = useStyles()

  return (
    <ul className={classes.root}>
      {[...Array(starsAmount)].map((_, index: number) => {
        const ratingValue = index + 1
        return (
          <li key={index}>
            <label
              onClick={(): void => setRating(ratingValue)}
              onMouseEnter={(): void => setInteractValue(ratingValue)}
              onMouseLeave={(): void => setInteractValue(0)}
            >
              <input type="radio" value={ratingValue} className={classes.hide} />
              <SvgIcon
                className={clsx({
                  [classes.star]: true,
                  [classes.activeStar]: ratingValue <= (interactValue || rating)
                })}
              >
                <StarIcon />
              </SvgIcon>
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default Rating
