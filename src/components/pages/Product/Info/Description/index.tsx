import React from 'react'
import styled from 'styled-components'

interface DescriptionProps {
  gender: string
  category: string
  description: string
  dimensions: string
  color: string
}

const Container = styled.div`
  padding: 10px 5px;
`

const Title = styled.h2`
  margin-top: 0;
  margin: 10px 0 5px 0;
  font-size: 24px;
`

const DescText = styled.p`
  margin-top: 0;
  font-weight: 500;
  font-size: 16px;
  @media ${({ theme }) => theme.media.lg} {
    font-size: 17px;
  }
`

const Inner = styled.div`
  max-width: 700px;
`

const Detail = styled.p`
  margin: 0;
  margin-bottom: 3px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`

const DetailTitle = styled.span`
  color: #777;
  flex-shrink: 0;
`

const Divider = styled.span`
  margin-right: 4%;
  margin-left: 2%;
  color: #777;
`

const DetailInfo = styled.span`
  flex-basis: 60%;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  @media ${({ theme }) => theme.media.lg} {
    flex-basis: 75%;
  }
`

const Description: React.FC<DescriptionProps> = ({
  gender,
  description,
  dimensions,
  color,
  category
}) => {
  return (
    <Container>
      <Title>Описание</Title>
      <DescText>{description}</DescText>
      <Inner>
        {dimensions && (
          <Detail>
            <DetailTitle>Размер</DetailTitle>
            <DetailInfo>
              <Divider>:</Divider>
              {dimensions} см.
            </DetailInfo>
          </Detail>
        )}
        {color && (
          <Detail>
            <DetailTitle>Цвет</DetailTitle>
            <DetailInfo>
              <Divider>:</Divider>
              {color}
            </DetailInfo>
          </Detail>
        )}
        <Detail>
          <DetailTitle>Тип</DetailTitle>
          <DetailInfo>
            <Divider>:</Divider>
            {gender}
          </DetailInfo>
        </Detail>
        <Detail>
          <DetailTitle>Категория</DetailTitle>
          <DetailInfo>
            <Divider>:</Divider>
            {category}
          </DetailInfo>
        </Detail>
      </Inner>
    </Container>
  )
}

export default Description
