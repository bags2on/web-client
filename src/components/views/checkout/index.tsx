import React, { useState, useEffect } from 'react'
import { PageLoader } from '@/shared/PageLoader'
import { CustomerInfo } from './CustomerInfo/CustomerInfo'
import { Delivery } from './Delivery/Delivery'
import { Preview } from './Preview/Preview'
import { OrderSuccessModal } from './Modals/OrderSuccess'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import { routeNames } from '@/utils/navigation'
import { useMutation } from '@apollo/client'
import { CREATE_ORDER } from '@/graphql/order'
import { usePageState } from './usePageState'
import { CheckoutOrderSchema, CheckoutOrderType } from '@/utils/formValidationSchema'

import styles from './Checkout.module.scss'
import { useCartStore } from '@/store/cart'

import { useForm, FormProvider } from 'react-hook-form'

export type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
}

// initialValues={{

//   supplier: 'nova-poshta',
//   cityName: '',
//   postOfficeName: '',
//   '_np-delivery-type': 'department'

export function CheckoutIndex() {
  const router = useRouter()

  const [state, dispatch] = usePageState({
    waitDataSyncing: true,
    isInfoOpen: false,
    isDeliveryOpen: false
  })

  const formMethods = useForm<FormValues>({
    mode: 'onChange',
    // resolver: valibotResolver(currentValidationSchema),
    defaultValues: {
      name: '',
      surname: '',
      phone: '',
      email: ''
    }
  })

  const [isOrderSuccess, setOrderSuccess] = useState<boolean>(false)
  const [orderErr, setOrderErr] = useState<boolean>(false)

  const cartItems = useCartStore((state) => state.cartItems)

  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  useEffect(() => {
    console.log(cartItems)

    if (!cartItems.length) {
      // router.back()
    } else {
      dispatch.dataSynced()
    }
  }, [router, dispatch, cartItems])

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

  const handleSubmit2 = () => {
    // INFO: why getValues
    // https://github.com/orgs/react-hook-form/discussions/4028#discussioncomment-7542160
    const data = formMethods.getValues()

    console.log('SubmitHandler', data)
  }

  const hanldeModalClose = () => {
    router.replace(routeNames.root)
  }

  if (state.waitDataSyncing) {
    return <PageLoader />
  }

  return (
    <div className={styles.container}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleSubmit2)}>
          <Formik
            validateOnBlur
            validateOnChange={false}
            onSubmit={handleSubmit}
            // validationSchema={CheckoutOrderSchema}
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
              <div className={styles.pageForm}>
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
              </div>
            )}
          </Formik>
        </form>
      </FormProvider>
      <OrderSuccessModal open={isOrderSuccess} onClose={hanldeModalClose} />
    </div>
  )
}
