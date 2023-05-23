import React, { useState, useEffect } from 'react'
import CustomerInfo from './CustomerInfo/CustomerInfo'
import Delivery from './Delivery/Delivery'
import Preview from './Preview/Preview'
import Modal from './Modals/OrderSuccess'
import routes from '../../utils/routes'
import history from '../../utils/history'
import { useMutation, useReactiveVar } from '@apollo/client'
import { cartItemsVar } from '../../apollo/cache/variables'
import { CheckoutOrderSchema, CheckoutOrderType } from '../../utils/validationSchema'
import { Formik } from 'formik'
import { CREATE_ORDER } from '../../graphql/order'
import { Redirect } from 'react-router-dom'
import { useWindowRatio } from '../../hooks'

import { Container, Form, DeliveryBox, PreviewBox } from './Checkout.styled'

const Checkout: React.FC = () => {
  const [windowWidth] = useWindowRatio()

  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [orderErr, setOrderErr] = useState<boolean>(false)

  const [isInfoEdit, setInfoEdit] = useState<boolean>(false)
  const [isDeliveryEdit, setDeliveryEdit] = useState<boolean>(false)

  const cartItems = useReactiveVar(cartItemsVar)
  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (cartItems.length === 0) return <Redirect to={routes.root} />

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
      setModalOpen(true)
    } catch (error) {
      setOrderErr(true)
    }
  }

  const hanldeModalClose = () => {
    setModalOpen(false)
    history.replace(routes.root)
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
        {(): React.ReactElement => (
          <Form>
            <DeliveryBox>
              <CustomerInfo isEdit={isInfoEdit} onEdit={handleInfoEditOpen} onContinue={handleInfoChecked} />
              <Delivery isEdit={isDeliveryEdit} onEdit={handleDeliveryEditOpen} onContinue={handleDeliveryChecked} />
            </DeliveryBox>
            <PreviewBox>
              <Preview submitLoading={loading} orderCreationErr={orderErr} />
            </PreviewBox>
          </Form>
        )}
      </Formik>
      <Modal open={isModalOpen} onClose={hanldeModalClose} />
    </Container>
  )
}

export default Checkout
