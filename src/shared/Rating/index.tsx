import React, { useState } from 'react'
import { SharedMutations } from '../../apollo/cache/mutations'
import { ReactComponent as StarIcon } from '../../assets/svg/icons/star.svg'
import { Container, List, TheStarIcon, HiddenInput, Counter } from './Rating.styled'

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
    <Container>
      <List>
        {[...Array(starsAmount)].map((_, index: number) => {
          const ratingValue = index + 1

          return (
            <li key={index}>
              <label
                onMouseEnter={(): void => setInteractValue(ratingValue)}
                onMouseLeave={(): void => setInteractValue(0)}
              >
                <HiddenInput type="radio" value={ratingValue} />
                <TheStarIcon
                  $active={ratingValue <= (interactValue || rating)}
                  onClick={(): void => handleRatingChange(ratingValue)}
                >
                  <StarIcon />
                </TheStarIcon>
              </label>
            </li>
          )
        })}
      </List>
      <Counter>{starRating}</Counter>
    </Container>
  )
}

export default Rating
