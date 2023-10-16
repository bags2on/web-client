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
import { useWindowRatio } from '@/hooks'
import { CheckoutOrderSchema, CheckoutOrderType } from '@/utils/formValidationSchema'

import { Container, Form, DeliveryBox, PreviewBox } from './Checkout.styled'

const Checkout: React.FC = () => {
  const [windowWidth] = useWindowRatio()
  const router = useRouter()

  const [isOrderSuccess, setOrderSuccess] = useState<boolean>(false)
  const [orderErr, setOrderErr] = useState<boolean>(false)

  const [loadingCart, setLoading] = useState<boolean>(true)

  const [isInfoEdit, setInfoEdit] = useState<boolean>(false)
  const [isDeliveryEdit, setDeliveryEdit] = useState<boolean>(false)

  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('cart_products') || '[]')
    if (!data.length) {
      router.back()
    } else {
      setLoading(false)
    }
  }, [router])

  const handleInfoEditOpen = (): void => {
    if (windowWidth >= 900) return
    if (isDeliveryEdit) setDeliveryEdit(false)
    setInfoEdit((prev) => !prev)
  }

  const handleDeliveryEditOpen = (): void => {
    if (windowWidth >= 900) return
    if (isInfoEdit) setInfoEdit(false)
    setDeliveryEdit((prev) => !prev)
  }

  const handleInfoChecked = () => {
    setInfoEdit(false)
    setDeliveryEdit(true)
  }

  const handleDeliveryChecked = () => {
    setDeliveryEdit(false)
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

  if (loadingCart) {
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
          email: '',
          phone: '',
          supplier: 'nova-poshta',
          region: '',
          cityId: '',
          postOfficeId: 'unknown'
        }}
      >
        {() => (
          <Form>
            <DeliveryBox>
              <CustomerInfo
                isEdit={isInfoEdit}
                onEdit={handleInfoEditOpen}
                onContinue={handleInfoChecked}
              />
              <Delivery
                isEdit={isDeliveryEdit}
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
