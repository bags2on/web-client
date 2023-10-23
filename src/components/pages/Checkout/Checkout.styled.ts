import { Form as FormikForm } from 'formik'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f3f3f3' : 'transparent')};
`

export const Form = styled(FormikForm)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.lg} {
    max-width: 1500px;
    flex-wrap: nowrap;
    margin: 0 auto;
    padding: 20px 7px;
  }
`

export const DeliveryBox = styled.div`
  width: 100%;
  padding: 20px 10px 20px 10px;
  background-color: ${({ theme }) => (theme.type === 'light' ? '#f2f2f2' : 'transparent')};
  @media ${({ theme }) => theme.media.lg} {
    border-radius: 14px;
    margin-right: 20px;
    background-color: ${({ theme }) => (theme.type === 'light' ? '#fff' : '#323232')};
  }
  @media ${({ theme }) => theme.media.xl} {
    padding: 20px 40px 20px 30px;
    flex-basis: 65%;
  }
`

export const PreviewBox = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.media.lg} {
    width: auto;
  }

  @media ${({ theme }) => theme.media.xl} {
    flex-basis: 35%;
  }
`
