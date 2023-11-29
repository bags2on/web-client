import React, { useState, useEffect } from 'react'
import PageLoader from '@/shared/PageLoader'
import CustomerInfo from './CustomerInfo/CustomerInfo'
import Delivery from './Delivery/Delivery'
import Preview from './Preview/Preview'
import OrderSuccessModal from './Modals/OrderSuccess'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { routeNames } from '@/utils/navigation'
import { useMutation } from '@apollo/client'
import { CREATE_ORDER } from '@/graphql/order'
import { useCheckoutPageState } from '@/hooks'
import { CheckoutOrderSchema, CheckoutOrderType } from '@/utils/formValidationSchema'

import { Container, Form, DeliveryBox, PreviewBox } from './Checkout.styled'

const Checkout: React.FC = () => {
  const router = useRouter()

  const [state, dispatch] = useCheckoutPageState({
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
    <Container>
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
          <Form>
            <DeliveryBox>
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
            </DeliveryBox>
            <PreviewBox>
              <Preview submitLoading={loading} orderCreationErr={orderErr} />
            </PreviewBox>
          </Form>
        )}
      </Formik>
      <OrderSuccessModal open={isOrderSuccess} onClose={hanldeModalClose} />
    </Container>
  )
}

export default Checkout
