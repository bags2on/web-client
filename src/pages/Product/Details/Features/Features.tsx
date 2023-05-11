import React from 'react'
import { ReactComponent as MaterialIcon } from '../../../../assets/svg/icons/product-material.svg'
import { ReactComponent as ColorIcon } from '../../../../assets/svg/icons/product-color.svg'
import { ReactComponent as GenderIcon } from '../../../../assets/svg/icons/product-gender.svg'
import { ReactComponent as CategoryIcon } from '../../../../assets/svg/icons/product-category.svg'
import { useTranslation } from 'react-i18next'

import { Container, Feature, FeatureIcon, FeatureInfo } from './Features.styled'

interface FeaturesProps {
  color: string
  material: string
  type: string
  category: string
}

const Features: React.FC<FeaturesProps> = ({ color, material, type, category }) => {
  const { t } = useTranslation()

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
