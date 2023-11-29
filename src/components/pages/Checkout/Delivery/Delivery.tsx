import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import StepTitle from '../common/StepTitle'
import ContinueButton from '../common/ContinueButton'
import SomethingWrongModal from '../Modals/SomethingWrong'
import { useFormikContext } from 'formik'
import { CheckoutOrderType } from '@/utils/formValidationSchema'
import { animated, useSpring } from 'react-spring'

import ShowService from '../common/ShowService'
import NovaPoshta from './NovaPoshta'
import UkrPoshta from './UkrPoshta'

import {
  Container,
  DeliveriesList,
  DeliveriesItem,
  ImageWrapper,
  ServiceLabel,
  DeliveryInput,
  DeliveryService,
  AnimatedBox
} from './Delivery.styled'

interface DeliveryProps {
  isEdit: boolean
  onEdit(): void
  onContinue(): void
}

export type PopularCity = {
  city_id: string
  city_name: string
  nova_poshta_id: string
  ukrposhta_id: string
}

const Delivery: React.FC<DeliveryProps> = ({ isEdit, onEdit, onContinue }) => {
  const { values } = useFormikContext<CheckoutOrderType>()

  // const [deliveryService, setDeliveryService] = useState<'nova' | 'ukr'>('nova')

  const [popularCities, setPopularCities] = useState<PopularCity[]>([])
  const [citieLoading, setCitieLoading] = useState<boolean>(true)
  const [areasError, setAreasError] = useState<boolean>(false)

  const isValuesValid = Boolean(values.cityId && values.postOfficeId)

  // INFO TODO: put this in a separate component with children
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

    fetch('/api/getPopularCities', { signal })
      .then(async (resp) => {
        const data = await resp.json()
        // console.log(data)

        if (resp.status === 200) {
          setPopularCities(data)
          setCitieLoading(false)
        } else {
          throw new Error(data.error)
        }
      })
      .catch((error) => {
        console.log('ERROR:', error.message)

        setAreasError(true)
        setCitieLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [])

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
              <DeliveryInput type="radio" name="supplier" disabled value="ukr-poshta" />
              <DeliveryService>
                <ImageWrapper>
                  <Image fill={true} src="/assets/ukr_poshta.svg" alt="логотип 'Укр Почта'" />
                </ImageWrapper>
              </DeliveryService>
            </ServiceLabel>
          </DeliveriesItem>
        </DeliveriesList>
        {/*  */}
        <ShowService as="nova-poshta" current={values.supplier}>
          <NovaPoshta cities={popularCities} />
        </ShowService>
        <ShowService as="ukr-poshta" current={values.supplier}>
          <UkrPoshta />
        </ShowService>
        {/*  */}
        <ContinueButton disabled={!isValuesValid} onClick={onContinue}>
          Продолжить
        </ContinueButton>
      </AnimatedBox>
      <SomethingWrongModal open={areasError} />
    </Container>
  )
}

export default Delivery
