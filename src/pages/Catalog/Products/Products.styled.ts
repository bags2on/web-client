import styled from 'styled-components'
import Button from '@/shared/Button'

export const Container = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 47px;

  @media ${({ theme }) => theme.media.lg} {
    padding-bottom: 67px;
  }
`

export const Smile = styled.p`
  font-size: 35px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`

export const Message = styled.p`
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  width: 270px;
  margin: 0;
  margin-bottom: 10px;
`

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 5px;
  list-style: none;
  @media ${({ theme }) => theme.media.lg} {
    padding: 10px 10px 0 10px;
  }
  @media ${({ theme }) => theme.media.xl} {
    padding: 10px 20px 0 20px;
  }
`

// xs={6} md={4} xl={3} desktop={2}
export const ProductItem = styled.li`
  flex-basis: 50%;
  max-width: 50%;

  @media ${({ theme }) => theme.media.md} {
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }

  @media ${({ theme }) => theme.media.xl} {
    max-width: 25%;
    flex-basis: 25%;
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
`

export const NotFoundBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100 * var(--vh));
  @media ${({ theme }) => theme.media.lg} {
    height: 100%;
  }
`

export const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  @media ${({ theme }) => theme.media.lg} {
    bottom: 15px;
  }
`

export const ActionButton = styled(Button)`
  display: block;
  width: 200px;
  padding: 15px 10px;
  margin: 0 auto;
  background-color: var(--green);
  &:hover {
    background-color: var(--green-light);
  }
`
