import styled from 'styled-components'
import Button from '@/shared/Button'

export const Container = styled.section`
  margin-bottom: 30px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#323232')};
  border-radius: 10px;

  @media ${({ theme }) => theme.media.lg} {
    background-color: transparent;
    border-radius: 0;
  }
`

export const AnimatedBox = styled.div`
  padding: 0 17px;

  @media ${({ theme }) => theme.media.lg} {
    padding: 0 5px;
    opacity: 1 !important;
    height: auto !important;
  }
`

export const FieldsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.xl} {
    max-width: 560px;
  }
`

export const Field = styled.div`
  flex-basis: 100%;
  & > span {
    font-size: 15px;
    color: ${({ theme }) => (theme.type === 'light' ? '#6a6a6a' : '#fff')};
    font-weight: 500px;
    padding-left: 7px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 1000px) {
    flex-basis: 48%;
  }
`

export const Divider = styled.div`
  @media ${({ theme }) => theme.media.lg} {
    margin-top: 15px;
    border-bottom: 2px solid;
    border-bottom-color: ${({ theme }) => (theme.type === 'light' ? '#dcdcdc' : '#646464')};
  }
`

export const ContinueButton = styled(Button)`
  background-color: var(--green-light);
  &:hover {
    background-color: var(--green-light);
  }

  @media ${({ theme }) => theme.media.lg} {
    display: none;
  }
`
