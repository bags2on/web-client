import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { StepTitle } from '../common/StepTitle'
import { Button } from '@/components/ui/Button'
import { SomethingWrongModal } from '../Modals/SomethingWrong'
import { useElementSize } from '@/hooks'
import { Field, useFormikContext } from 'formik'
import { CheckoutOrderType } from '@/utils/formValidationSchema'
import { ShowService } from '../common/ShowService'
import { NovaPoshta } from './NovaPoshta'
import { UkrPoshta } from './UkrPoshta'

import styles from './Delivery.module.scss'

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

export function Delivery({ isEdit, onEdit, onContinue }: DeliveryProps) {
  const { values } = useFormikContext<CheckoutOrderType>()

  // const [deliveryService, setDeliveryService] = useState<'nova' | 'ukr'>('nova')

  const [animatedRef, animatedEl] = useElementSize()

  const [popularCities, setPopularCities] = useState<PopularCity[]>([])
  const [citieLoading, setCitieLoading] = useState<boolean>(true)
  const [areasError, setAreasError] = useState<boolean>(false)

  const isValuesValid = Boolean(values.cityName && values.postOfficeName)

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
    <section className={styles.container}>
      <StepTitle step={2} isEdit={isEdit} onEdit={onEdit} valid={isValuesValid}>
        Способ доставки
      </StepTitle>
      <div
        className={clsx({
          [styles.animated]: true,
          [styles.animatedOpen]: isEdit
        })}
        style={{
          height: isEdit ? animatedEl.height : 0
        }}
      >
        <div ref={animatedRef} className={styles.animatedInner}>
          <ul className={styles.servicesList}>
            <li className={styles.servicesItem}>
              <label className={styles.serviceLabel}>
                <Field
                  type="radio"
                  name="supplier"
                  value="nova-poshta"
                  className={clsx('hide', styles.deliveryInput)}
                />
                <div className={styles.deliveryService}>
                  <div className={styles.serviceImageWrapper}>
                    <Image fill={true} src="/assets/nova_poshta.svg" alt="логотип 'Новая Почта'" />
                  </div>
                </div>
              </label>
            </li>
            <li className={styles.servicesItem}>
              <label className={styles.serviceLabel}>
                <Field
                  type="radio"
                  name="supplier"
                  disabled
                  value="ukr-poshta"
                  className={clsx('hide', styles.deliveryInput)}
                />
                <div className={styles.deliveryService}>
                  <div className={styles.serviceImageWrapper}>
                    <Image fill={true} src="/assets/ukr_poshta.svg" alt="логотип 'Укр Почта'" />
                  </div>
                </div>
              </label>
            </li>
          </ul>
          {/*  */}
          <ShowService as="nova-poshta" current={values.supplier}>
            <NovaPoshta cities={popularCities} />
          </ShowService>
          <ShowService as="ukr-poshta" current={values.supplier}>
            <UkrPoshta />
          </ShowService>
          {/*  */}
          <Button
            color="accept"
            fullWidth
            disabled={!isValuesValid}
            onClick={onContinue}
            className={styles.continueButton}
          >
            Продолжить
          </Button>
        </div>
      </div>
      <SomethingWrongModal open={areasError} />
    </section>
  )
}
