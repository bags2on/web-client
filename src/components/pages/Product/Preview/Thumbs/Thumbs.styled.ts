import styled from 'styled-components'
import NextImage from 'next/image'

export const Container = styled.div`
  display: flex;
  order: 1;
  margin-top: 10px;

  @media ${({ theme }) => theme.media.xl} {
    margin-right: 15px;
    margin-top: 0;
    order: 0;
    flex-basis: 15%;
  }
`

// export const FadeRight = styled.div`
//   position: absolute;
//   height: 100%;
//   padding: 1.3rem;
//   right: 0;
//   z-index: 10;
//   background-image: linear-gradient(270deg, #fff 30%, rgba(252, 255, 116, 0) 99.99%);
// `

export const List = styled.ul`
  overflow-x: auto;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.media.xl} {
    flex-direction: column;
  }
`

export const ListItem = styled.li`
  cursor: pointer;
  user-select: none;
  max-width: 75px;
  height: 75px;
  flex-shrink: 0;
  margin-right: 10px;
  -webkit-tap-highlight-color: transparent;

  &:last-child {
    margin-right: 0;
  }

  @media ${({ theme }) => theme.media.xl} {
    max-width: 100%;
    height: auto;
    flex-shrink: 1;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const Image = styled(NextImage)<{ $active: boolean }>`
  display: block;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  border: ${({ $active }) => ($active ? '1px solid #343434' : 'none')};
  &:hover {
    border: 1px dashed #343434;
  }

  @media ${({ theme }) => theme.media.xl} {
    height: auto;
  }
`
