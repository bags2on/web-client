import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px 10px 0 15px;
  margin-top: 10px;
`

export const Info = styled.div`
  margin-bottom: 15px;
`

export const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  line-height: 22px;
  font-weight: 500;
  & > b {
    font-size: 19px;
  }
`

export const ConditionsInfo = styled.div`
  padding: 0 20px;
  & > p {
    text-align: center;
    font-size: 13px;
    color: ${({ theme }) => (theme.type === 'light' ? '#6c757d' : '#f1f1f1')};
    padding-left: 3px;
  }
`

export const MakeOrderErr = styled.div`
  font-weight: 500;
  margin-top: 10px;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  background-color: #f44336;
  & p {
    margin: 0;
    margin-top: 5px;
  }
`
