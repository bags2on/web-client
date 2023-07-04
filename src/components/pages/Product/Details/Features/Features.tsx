import React from 'react'
import MaterialIcon from '../../../../../../public/assets/product/product-material.svg'
import ColorIcon from '../../../../../../public/assets/product/product-color.svg'
import GenderIcon from '../../../../../../public/assets/product/product-gender.svg'
import CategoryIcon from '../../../../../../public/assets/product/product-category.svg'
import { useTranslation } from 'next-i18next'

import { Container, Feature, FeatureIcon, FeatureInfo } from './Features.styled'

interface FeaturesProps {
  color: string
  material: string
  type: string
  category: string
}

const Features: React.FC<FeaturesProps> = ({ color, material, type, category }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Feature>
        <FeatureIcon>
          <MaterialIcon />
        </FeatureIcon>
        <FeatureInfo>
          <p>{t('product.common.material')}</p>
          <span>{t(`product.common.${material}`)}</span>
        </FeatureInfo>
      </Feature>
      <Feature>
        <FeatureIcon>
          <ColorIcon />
        </FeatureIcon>
        <FeatureInfo>
          <p>{t('product.common.color')}</p>
          <span>{color}</span>
        </FeatureInfo>
      </Feature>
      <Feature>
        <FeatureIcon>
          <GenderIcon />
        </FeatureIcon>
        <FeatureInfo>
          <p>{t('product.common.type')}</p>
          <span>{type}</span>
        </FeatureInfo>
      </Feature>
      <Feature>
        <FeatureIcon>
          <CategoryIcon />
        </FeatureIcon>
        <FeatureInfo>
          <p>{t('product.common.category')}</p>
          <span>{category}</span>
        </FeatureInfo>
      </Feature>
    </Container>
  )
}

export default Features
