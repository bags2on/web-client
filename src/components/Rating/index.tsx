import React, { useState } from 'react'
import clsx from 'clsx'
import StarIcon from '../../../public/assets/icons/star.svg'
import styles from './Rating.module.scss'
import { useUserStore } from '@/store/user'

interface RatingProps {
  starsAmount?: number
  starRating?: number
}

export function Rating({ starsAmount = 5, starRating = 0 }: RatingProps) {
  const [rating, setRating] = useState<number>(Math.round(starRating))
  const [interactValue, setInteractValue] = useState<number>(0)

  const isAuthenticated = useUserStore((state) => state.isAuthenticated)

  const handleRatingChange = (newRating: number) => {
    if (!isAuthenticated) return

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
