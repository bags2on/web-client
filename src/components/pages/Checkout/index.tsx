import React, { useState, useEffect } from 'react'
import PageLoader from '@/shared/PageLoader'
import { CustomerInfo } from './CustomerInfo/CustomerInfo'
import { Delivery } from './Delivery/Delivery'
import Preview from './Preview/Preview'
import { OrderSuccessModal } from './Modals/OrderSuccess'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import { routeNames } from '@/utils/navigation'
import { useMutation } from '@apollo/client'
import { CREATE_ORDER } from '@/graphql/order'
import { usePageState } from './usePageState'
import { CheckoutOrderSchema, CheckoutOrderType } from '@/utils/formValidationSchema'

import styles from './Checkout.module.scss'

export function CheckoutIndex() {
  const router = useRouter()

  const [state, dispatch] = usePageState({
    waitDataSyncing: true,
    isInfoOpen: false,
    isDeliveryOpen: false
  })

  const [isOrderSuccess, setOrderSuccess] = useState<boolean>(false)
  const [orderErr, setOrderErr] = useState<boolean>(false)

  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('cart_products') || '[]')
    if (!data.length) {
      router.back()
    } else {
      dispatch.dataSynced()
    }
  }, [router, dispatch])

  const handleInfoEditOpen = (): void => {
    dispatch.openInfo()
  }

  const handleDeliveryEditOpen = (): void => {
    dispatch.openDelivery()
  }

  const handleInfoChecked = () => {
    dispatch.infoChecked()
  }

  const handleDeliveryChecked = () => {
    dispatch.closeDelivery()
  }

  const handleSubmit = async (values: CheckoutOrderType): Promise<void> => {
    console.log(values)

    try {
      await createOrder({
        variables: { ...values }
      })
      setOrderSuccess(true)
    } catch (error) {
      setOrderErr(true)
    }
  }

  const hanldeModalClose = () => {
    router.replace(routeNames.root)
  }

  if (state.waitDataSyncing) {
    return <PageLoader />
  }

  return (
    <div className={styles.container}>
      <Formik
        validateOnBlur
        validateOnChange={false}
        onSubmit={handleSubmit}
        validationSchema={CheckoutOrderSchema}
        initialValues={{
          name: '',
          surname: '',
          phone: '',
          email: '',
          supplier: 'nova-poshta',
          cityName: '',
          postOfficeName: '',
          '_np-delivery-type': 'department'
        }}
      >
        {() => (
          <Form className={styles.pageForm}>
            <div className={styles.formContent}>
              <CustomerInfo
                isEdit={state.isInfoOpen}
                onEdit={handleInfoEditOpen}
                onContinue={handleInfoChecked}
              />
              <Delivery
                isEdit={state.isDeliveryOpen}
                onEdit={handleDeliveryEditOpen}
                onContinue={handleDeliveryChecked}
              />
            </div>
            <div className={styles.preview}>
              <Preview submitLoading={loading} orderCreationErr={orderErr} />
            </div>
          </Form>
        )}
      </Formik>
      <OrderSuccessModal open={isOrderSuccess} onClose={hanldeModalClose} />
    </div>
  )
}
