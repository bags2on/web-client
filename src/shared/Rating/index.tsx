import React, { useState } from 'react'
import clsx from 'clsx'
import SvgIcon from '@material-ui/core/SvgIcon'
import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import { hiddenStyles } from '../../utils/styling'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  list: {
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
  hide: { ...hiddenStyles },
  counter: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: '17px'
  }
}))

interface RatingProps {
  votesAmount: number
  starsAmount?: number
  starRating?: number
}

const Rating: React.FC<RatingProps> = ({ votesAmount, starsAmount = 5, starRating = 0 }) => {
  const classes = useStyles()

  const [rating, setRating] = useState<number>(starRating)
  const [interactValue, setInteractValue] = useState<number>(0)
  const [counter, setCounter] = useState<number>(votesAmount)

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
    setCounter((counter) => {
      if (counter > votesAmount) return counter
      return counter + 1
    })
  }

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {[...Array(starsAmount)].map((_, index: number) => {
          const ratingValue = index + 1
          return (
            <li key={index}>
              <label
                onMouseEnter={(): void => setInteractValue(ratingValue)}
                onMouseLeave={(): void => setInteractValue(0)}
              >
                <input type="radio" value={ratingValue} className={classes.hide} />
                <SvgIcon
                  onClick={(): void => handleRatingChange(ratingValue)}
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
      <span className={classes.counter}>({counter})</span>
    </div>
  )
}

export default Rating
