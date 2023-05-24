import styled from 'styled-components'
import SignUpPatternImg from '../../assets/rastr/signup-promo-pattern.jpg'

export const Container = styled.div`
  cursor: pointer;
  margin-top: 15px;
  user-select: none;
  padding: 7px 15px;
  background-image: url(${SignUpPatternImg});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;
`

export const TopBox = styled.div`
  font-size: max(1em, min(4em, calc(var(--base-scale) * 6)));
  margin-right: 15px;
`

export const BottomBox = styled.div`
  font-size: max(1em, min(1.4em, calc(var(--base-scale) * 3)));
  margin: 0;
  & > p {
    margin: 0;
  }
`
