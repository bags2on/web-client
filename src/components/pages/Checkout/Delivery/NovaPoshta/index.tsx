import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import Warehouses from './Warehouses'
import AsyncSelect from 'react-select/async'
import RadioGroup from '@/shared/formFields/RadioGroup'
import { deliveryTypeOptions } from './data'
import type { PopularCity } from '../Delivery'
import { useFormikContext } from 'formik'
import { CheckoutOrderType } from '@/utils/formValidationSchema'

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

type CityOption = {
  label: string
  value: string
}

const pupularCities = ['Харків', 'Київ', 'Одеса', 'Дніпро', 'Львів']

const NovaPoshta: React.FC<NovaPoshtaProps> = ({ cities }) => {
  const [selectValue, setSelectValue] = useState<CityOption | null>(null)
  const { setFieldValue } = useFormikContext<CheckoutOrderType>()

  const [cityId, setCityId] = useState<string>('')

  const memCitiesOptions: CityOption[] = useMemo(
    () =>
      cities.map((city) => ({
        label: city.city_name,
        value: city.nova_poshta_id
      })),
    [cities]
  )

  useEffect(() => {
    setCityId(selectValue ? selectValue.value : '')
  }, [selectValue])

  const promiseOptions = (inputValue: string) =>
    new Promise<Array<CityOption>>((resolve) => {
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
    setFieldValue('cityName', cityId)
  }

  const handleWarehouseChange = (warehouse: string) => {
    setFieldValue('postOfficeName', warehouse)
  }

  const handleCityQuikSet = (city: CityOption) => {
    setSelectValue(city)
    setCityId(city.value)
    setFieldValue('cityName', city.label)
  }

  const selectedCities = pupularCities.map((baseCity) => {
    const city = cities.find((city) =>
      city.city_name.toLocaleLowerCase().includes(baseCity.toLocaleLowerCase())
    )

    return {
      label: city ? city.city_name : '',
      value: city ? city.nova_poshta_id : '',
      baseLabel: baseCity
    }
  })

  return (
    <Container>
      <RadioGroup asRow name="_np-delivery-type" options={deliveryTypeOptions} />
      <FormField>
        <span>Город</span>
        <AsyncSelect
          cacheOptions
          value={selectValue}
          isClearable
          onChange={(newValue, { action }) => {
            setSelectValue(newValue)
            if (action === 'select-option' || action === 'clear') {
              if (newValue) {
                handleSelectChange(newValue.value)
              } else {
                handleSelectChange('')
              }
            }
          }}
          defaultOptions={memCitiesOptions}
          loadOptions={promiseOptions}
          placeholder={'Укажите город'}
          styles={{
            menu: ({ position, ...provided }) => ({
              ...provided,
              position: 'static'
            }),
            menuList: (provided) => ({
              ...provided,
              '::-webkit-scrollbar': {
                width: '4px',
                height: '0px'
              },
              '::-webkit-scrollbar-track': {
                background: '#f1f1f1'
              },
              '::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '15px'
              },
              '::-webkit-scrollbar-thumb:hover': {
                background: '#555'
              }
            })
          }}
        />
      </FormField>
      <CitiesList>
        {selectedCities.map(({ baseLabel, value, label }) => (
          <CityItem key={baseLabel} onClick={() => handleCityQuikSet({ label, value })}>
            <span>{baseLabel}</span>
          </CityItem>
        ))}
      </CitiesList>
      {cityId && <Warehouses cityId={cityId} onSelect={handleWarehouseChange} />}
    </Container>
  )
}

export default NovaPoshta
