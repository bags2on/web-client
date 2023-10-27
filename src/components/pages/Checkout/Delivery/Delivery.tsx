import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import StepTitle from '../common/StepTitle'
import ContinueButton from '../common/ContinueButton'
import Select from '@/shared/formFields/Select'
import TextInput from '@/shared/formFields/TextInput/TextInput'
import SomethingWrongModal from '../Modals/SomethingWrong'
import { useFormikContext } from 'formik'
import { CheckoutOrderType } from '@/utils/formValidationSchema'
import { animated, useSpring } from 'react-spring'

import {
  Container,
  DeliveriesList,
  DeliveriesItem,
  ImageWrapper,
  ServiceLabel,
  DeliveryInput,
  DeliveryService,
  AnimatedBox,
  AreaContainer,
  FormField
} from './Delivery.styled'

interface DeliveryProps {
  isEdit: boolean
  onEdit(): void
  onContinue(): void
}

const API_URL = process.env.REACT_APP_API_URL

type area = {
  id: string
  name: string
  areas: Array<area>
}
interface AreasType {
  name: string
  areas: Array<area>
}

const Delivery: React.FC<DeliveryProps> = ({ isEdit, onEdit, onContinue }) => {
  const { values } = useFormikContext<CheckoutOrderType>()

  const [areas, setAreas] = useState<AreasType>()
  const [areasLoading, setAreasLoading] = useState<boolean>(true)
  const [areasError, setAreasError] = useState<boolean>(false)

  const isValuesValid = Boolean(values.region && values.cityId && values.postOfficeId)

  const slideInStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isEdit ? 1 : 0,
      height: isEdit ? 475 : 0
    }
  })

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    fetch(API_URL + '/areas', { signal })
      .then(async (resp) => {
        const data = await resp.json()
        setAreas(data)
        setAreasLoading(false)
      })
      .catch(() => {
        setAreasError(true)
      })

    return () => {
      controller.abort()
    }
  }, [])

  const areasOptions =
    areas?.areas.map(({ name }) => ({
      label: name,
      value: name
    })) || []

  const cities = areas?.areas.find((currentArea) => currentArea.name === values.region)?.areas

  const citiesOptions =
    cities?.map((city) => ({
      label: city.name,
      value: city.name
    })) || []

  return (
    <Container>
      <StepTitle step={2} isEdit={isEdit} onEdit={onEdit} valid={isValuesValid}>
        Способ доставки
      </StepTitle>
      <AnimatedBox as={animated.div} style={{ ...slideInStyles, overflow: 'hidden' }}>
        <DeliveriesList>
          <DeliveriesItem>
            <ServiceLabel>
              <DeliveryInput type="radio" name="supplier" value="nova-poshta" />
              <DeliveryService>
                <ImageWrapper>
                  <Image fill={true} src="/assets/nova_poshta.svg" alt="логотип 'Новая Почта'" />
                </ImageWrapper>
              </DeliveryService>
            </ServiceLabel>
          </DeliveriesItem>
          <DeliveriesItem>
            <ServiceLabel>
              <DeliveryInput type="radio" name="supplier" value="ukr-poshta" />
              <DeliveryService>
                <ImageWrapper>
                  <Image fill={true} src="/assets/ukr_poshta.svg" alt="логотип 'Укр Почта'" />
                </ImageWrapper>
              </DeliveryService>
            </ServiceLabel>
          </DeliveriesItem>
        </DeliveriesList>
        <AreaContainer>
          <FormField>
            <span>Область</span>
            <Select name="region" disabled={areasLoading} options={areasOptions} />
          </FormField>
          <FormField>
            <span>Город</span>
            <Select name="cityId" disabled={!values.region} options={citiesOptions} />
          </FormField>
        </AreaContainer>
        <FormField>
          <span>Выберите отделение</span>
          <TextInput name="postOfficeId" />
        </FormField>
        <ContinueButton disabled={!isValuesValid} onClick={onContinue}>
          Продолжить
        </ContinueButton>
      </AnimatedBox>
      <SomethingWrongModal open={areasError} />
    </Container>
  )
}

export default Delivery
