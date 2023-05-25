import styled from 'styled-components'
import Button from '../../shared/Button/Button'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100 * var(--vh));
`

export const Inner = styled.div`
  width: 100%;
  max-width: 500;
`

export const ImageBox = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  & img {
    width: 100%;
  }
`

export const Title = styled.h1`
  margin: 0;
  text-align: center;
`

export const ActionButton = styled(Button)`
  display: block;
  max-width: 150px;
  margin: 0 auto;
  margin-top: 20px;
`
