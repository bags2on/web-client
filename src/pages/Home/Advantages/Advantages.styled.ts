import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f8fafa' : '#282828')};
  padding: 20px 0;
`

export const List = styled.ul`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  & li {
    padding: 1px;
    margin: 18px 0;
  }
  @media ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: baseline;
    & li {
      flex-grow: 1;
      flex-basis: 25%;
      width: 25%;
      margin: 0;
      padding: 0 15px;
    }
  }
`

export const IconWrapper = styled.div`
  height: 45px;
  margin: 0 auto;
  & img {
    user-select: none;
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.p`
  font-size: 16px;
  margin-top: 17px;
  margin-bottom: 10px;
  line-height: 1.5;
  text-align: center;
  font-weight: 600;
`

export const Info = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: center;
  font-weight: 500;
  color: var(--sub-title-color);
`
