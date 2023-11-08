import React, { useEffect, useState } from 'react'
import AsyncSelect from 'react-select/async'

interface WarehousesProps {
  cityId: string
}

type WarehousesOption = {
  label: string
  value: string
}

type Warehouses = {
  id: string
  description: string
}

const Warehouses: React.FC<WarehousesProps> = ({ cityId }) => {
  const [warehouses, setWarehouses] = useState<WarehousesOption[]>([])
  const [selectValue, setSelectValue] = useState<WarehousesOption | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    setLoading(true)
    setWarehouses([])
    setSelectValue(null)

    fetch('/api/getWarehouses', {
      signal,
      method: 'POST',
      body: JSON.stringify({
        city_id: cityId,
        provider: 'nova_poshta'
      })
    })
      .then(async (resp) => {
        const data: Warehouses[] = await resp.json()
        // console.log(data)

        if (resp.status === 200) {
          const options: WarehousesOption[] = data.map((w) => ({
            value: w.id,
            label: w.description
          }))
          setWarehouses(options)
          setLoading(false)
        } else {
          throw new Error('failed request')
        }
      })
      .catch((error) => {
        console.log('ERROR:', error.message)
      })

    return () => {
      controller.abort()
    }
  }, [cityId])

  const loadWarehouses = (inputValue: string) =>
    new Promise<WarehousesOption[]>((resolve) => {
      setTimeout(() => {
        const c = warehouses.filter((w) => w.label.toLowerCase().includes(inputValue.toLowerCase()))
        resolve(c)
      })
    })

  const handleSelectChange = (value: string) => {
    console.log(value)
  }

  return (
    <div>
      <span>Отделения</span>
      <AsyncSelect
        cacheOptions
        isClearable
        isLoading={loading}
        value={selectValue}
        onChange={(newValue, { action }) => {
          // console.log(newValue, action)
          setSelectValue(newValue)
          if (action === 'select-option') {
            if (newValue) handleSelectChange(newValue.label)
            return
          }
          if (action === 'clear') handleSelectChange('')
        }}
        defaultOptions={warehouses}
        loadOptions={loadWarehouses}
        placeholder={'Укажите отделение'}
        styles={{
          menu: ({ position, ...provided }) => ({
            ...provided,
            position: 'static'
          })
        }}
      />
    </div>
  )
}

export default Warehouses
