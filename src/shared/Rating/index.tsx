import React, { useState } from 'react'
import clsx from 'clsx'
import SvgIcon from '@material-ui/core/SvgIcon'
import { SharedMutations } from '../../apollo/cache/mutations'
import { ReactComponent as StarIcon } from '../../assets/svg/icons/star.svg'
import { hiddenStyles } from '../../utils/styling'
import { makeStyles } from '@material-ui/core'

interface RatingProps {
  starsAmount?: number
  starRating?: number
}

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
    marginLeft: 5,
    fontWeight: 500,
    fontSize: 19,
    lineHeight: '20px'
  }
}))

const Rating: React.FC<RatingProps> = ({ starsAmount = 5, starRating = 0 }) => {
  const classes = useStyles()
  const [rating, setRating] = useState<number>(Math.round(starRating))
  const [interactValue, setInteractValue] = useState<number>(0)

  const handleRatingChange = (newRating: number) => {
    const isAuth = SharedMutations.checkAuthentication()
    if (!isAuth) return

    setRating(newRating)
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
      <span className={classes.counter}>{starRating}</span>
    </div>
  )
}

export default Rating
