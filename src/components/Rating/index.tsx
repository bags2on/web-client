import React, { useState } from 'react'
import clsx from 'clsx'
import StarIcon from '../../../public/assets/icons/star.svg'
import { SharedMutations } from '../../apollo/cache/mutations'
import styles from './Rating.module.scss'

interface RatingProps {
  starsAmount?: number
  starRating?: number
}

const Rating: React.FC<RatingProps> = ({ starsAmount = 5, starRating = 0 }) => {
  const [rating, setRating] = useState<number>(Math.round(starRating))
  const [interactValue, setInteractValue] = useState<number>(0)

  const handleRatingChange = (newRating: number) => {
    const isAuth = SharedMutations.checkAuthentication()
    if (!isAuth) return

    setRating(newRating)
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {[...Array(starsAmount)].map((_, index: number) => {
          const ratingValue = index + 1

          return (
            <li key={index}>
              <label
                onMouseEnter={(): void => setInteractValue(ratingValue)}
                onMouseLeave={(): void => setInteractValue(0)}
              >
                <input type="radio" value={ratingValue} className="hide" />
                <div
                  className={clsx({
                    'svg-icon': true,
                    [styles.starIcon]: true,
                    [styles.active]: ratingValue <= (interactValue || rating)
                  })}
                  onClick={(): void => handleRatingChange(ratingValue)}
                >
                  <StarIcon />
                </div>
              </label>
            </li>
          )
        })}
      </ul>
      <span className={styles.counter}>{starRating}</span>
    </div>
  )
}

export default Rating
