import React from 'react'
import styled, { css } from 'styled-components'
import IconButton from '@/shared/IconButton'
import SvgIcon from '@/shared/SvgIcon'
import ArrowIcon from '../../../../../public/assets/icons/expand-arrow.svg'
import { useSwiper } from 'swiper/react'

const navButton = css`
  position: absolute;
  top: 50%;
  width: 45px;
  height: 45px;
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 50%;
  transition: all 0.3s;
  color: #afafaf;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &:active {
    transform: scale(1.2);
  }
  @media ${({ theme }) => theme.media.md} {
    width: 50px;
    height: 50px;
  }
`

const PrevButton = styled(IconButton)`
  ${navButton}
  left: 10px;
`

const NextButton = styled(IconButton)`
  ${navButton}
  right: 10px;
`

const PrevButtonIcon = styled(SvgIcon)`
  transform: rotate(-90deg);
`

const NextButtonIcon = styled(SvgIcon)`
  transform: rotate(90deg);
`

const NavButtons: React.FC = () => {
  const swiper = useSwiper()

  const handlePrevClick = () => {
    swiper.slidePrev()
  }

  const handleNextClick = () => {
    swiper.slideNext()
  }

  return (
    <>
      <PrevButton onClick={handlePrevClick}>
        <PrevButtonIcon>
          <ArrowIcon />
        </PrevButtonIcon>
      </PrevButton>
      <NextButton onClick={handleNextClick}>
        <NextButtonIcon>
          <ArrowIcon />
        </NextButtonIcon>
      </NextButton>
    </>
  )
}

export default NavButtons
