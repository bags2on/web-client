import React, { useState, useMemo } from 'react'
import RadioGroup from '@/shared/formFields/RadioGroup'
import styled from 'styled-components'
// import { useFormikContext } from 'formik'
// import type { CheckoutOrderType } from '@/utils/formValidationSchema'
import { deliveryTypeOptions, pupularCities } from './data'
import type { PopularCity } from '../Delivery'

import AsyncSelect from 'react-select/async'
import Warehouses from './Warehouses'

interface NovaPoshtaProps {
  cities: PopularCity[]
}

export const Container = styled.div``

export const FormField = styled.div`
  /* position: relative; */
  width: 100%;
  & > span {
    font-size: 15px;
    color: ${({ theme }) => (theme.type === 'light' ? '#6a6a6a' : '#fff')};
    font-weight: 500;
    padding-left: 7px;
    margin-bottom: 7px;
  }
`

export const CitiesList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`

export const CityItem = styled.li`
  color: #0670eb;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`

const NovaPoshta: React.FC<NovaPoshtaProps> = ({ cities }) => {
  // const { values } = useFormikContext<CheckoutOrderType>()

  const [cityId, setCityId] = useState<string>('')

  const memCitiesOptions = useMemo(
    () =>
      cities.map((city) => ({
        label: city.city_name,
        value: city.nova_poshta_id
      })),
    [cities]
  )

  const promiseOptions = (inputValue: string) =>
    new Promise<
      Array<{
        label: string
        value: string
      }>
    >((resolve) => {
      setTimeout(() => {
        const c = cities
          .map((city) => ({
            label: city.city_name,
            value: city.nova_poshta_id
          }))
          .filter((c) => c.label.toLowerCase().includes(inputValue.toLowerCase()))

        resolve(c)
      }, 3000)
    })

  const handleSelectChange = (cityId: string) => {
    setCityId(cityId)
  }

  return (
    <Container>
      <RadioGroup asRow name="_np-delivery-type" options={deliveryTypeOptions} />
      <FormField>
        <span>Город</span>
        <AsyncSelect
          // menuIsOpen
          isClearable
          onChange={(newValue, action) => {
            // console.log(newValue, action.action)
            if (action.action === 'select-option' || action.action === 'clear') {
              if (newValue) {
                handleSelectChange(newValue.value)
              } else {
                handleSelectChange('')
              }
            }
          }}
          name="postOfficeId"
          defaultOptions={memCitiesOptions}
          loadOptions={promiseOptions}
          placeholder={'Укажите город'}
          styles={{
            menu: ({ position, ...provided }) => ({
              ...provided,
              position: 'static'
            })
          }}
        />
      </FormField>
      <CitiesList>
        {pupularCities.map((city) => (
          <CityItem key={city.id}>
            <span>{city.title}</span>
          </CityItem>
        ))}
      </CitiesList>
      {/* <p>{cityId}</p> */}
      {cityId && <Warehouses cityId={cityId} />}
    </Container>
  )
}

export default NovaPoshta
