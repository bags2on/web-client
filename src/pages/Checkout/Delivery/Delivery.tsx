import React, { useState, useEffect } from 'react'
import TextInput from '../../../shared/FormFields/TextInput/TextInput'
import ImagePlaceholder from '../../../shared/ImagePlaceholder'
import novaPoshtaImage from '../../../assets/svg/nova_poshta.svg'
import urkPoshtaImage from '../../../assets/svg/ukr-poshta.svg'
import justinImage from '../../../assets/svg/justin.svg'
import SomethingWrongModal from '../Modals/SomethingWrong'
import { CheckoutOrderType } from '../../../utils/validationSchema'
import { ReactComponent as PinIcon } from '../../../assets/svg/icons/pin.svg'
import { useFormikContext } from 'formik'
import { animated, useSpring } from 'react-spring'
import Select from '../../../shared/FormFields/Select'

import {
  Container,
  TitleWrapper,
  TitleBox,
  ThePinIcon,
  DeliveriesList,
  DeliveriesItem,
  ServiceLabel,
  DeliveryInput,
  ImageWrapper,
  EditPlug,
  AnimatedBox,
  AreaContainer,
  FormField,
  ContinueButton
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
      <TitleWrapper $expand={isEdit} onClick={onEdit}>
        <TitleBox>
          <ThePinIcon $valid={Boolean(values.region && values.cityId && values.postOfficeId)}>
            <PinIcon />
          </ThePinIcon>
          <h2>Способ доставки</h2>
        </TitleBox>
        <EditPlug $hide={isEdit}>Изменить</EditPlug>
      </TitleWrapper>
      <AnimatedBox as={animated.div} style={{ ...slideInStyles, overflow: 'hidden' }}>
        <DeliveriesList>
          <DeliveriesItem>
            <ServiceLabel>
              <DeliveryInput type="radio" name="supplier" value="nova-poshta" />
              <ImageWrapper>
                <ImagePlaceholder plain src={novaPoshtaImage} altText="логотип 'Новая Почта'" />
              </ImageWrapper>
            </ServiceLabel>
          </DeliveriesItem>
          <DeliveriesItem>
            <ServiceLabel>
              <DeliveryInput type="radio" name="supplier" value="url-poshta" />
              <ImageWrapper>
                <ImagePlaceholder plain src={urkPoshtaImage} altText="логотип 'Укр Почта'" />
              </ImageWrapper>
            </ServiceLabel>
          </DeliveriesItem>
          <DeliveriesItem>
            <ServiceLabel>
              <DeliveryInput type="radio" name="supplier" value="justin" />
              <ImageWrapper>
                <ImagePlaceholder plain src={justinImage} altText="логотип 'Justin'" />
              </ImageWrapper>
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
        <ContinueButton disableShadow fullWidth onClick={onContinue}>
          Продолжить
        </ContinueButton>
      </AnimatedBox>
      <SomethingWrongModal open={areasError} />
    </Container>
  )
}

export default Delivery
