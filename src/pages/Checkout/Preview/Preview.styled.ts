import styled from 'styled-components'

export const Container = styled.section`
  padding: 10px;
  @media ${({ theme }) => theme.media.lg} {
    padding: 0;
  }
`

export const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#323232')};
  border-radius: 14px;
  padding: 7px 10px 15px 10px;
  @media ${({ theme }) => theme.media.lg} {
    width: 430px;
    padding: 20px 40px 20px 30px;
  }
`

export const LoaderWrapper = styled.div`
  width: 100%;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  @media ${({ theme }) => theme.media.lg} {
    width: 430px;
  }
`
