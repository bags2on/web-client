import { useState, useEffect } from 'react'
import { PageLoader } from '@/shared/PageLoader'
import { CustomerInfo } from './CustomerInfo/CustomerInfo'
import { Delivery } from './Delivery/Delivery'
import { Preview } from './Preview/Preview'
import { OrderSuccessModal } from './Modals/OrderSuccess'
import { useRouter } from 'next/router'
import { routeNames } from '@/utils/navigation'
import { useMutation } from '@apollo/client'
import { CREATE_ORDER } from '@/graphql/order'
import { usePageState } from './usePageState'
import { FormValues, validationSchema } from './model/validation-schema'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { useCartStore } from '@/store/cart'

import styles from './Checkout.module.scss'

export function CheckoutIndex() {
  const router = useRouter()

  const [state, dispatch] = usePageState({
    waitDataSyncing: true,
    isInfoOpen: false,
    isDeliveryOpen: false
  })

  const formMethods = useForm<FormValues>({
    mode: 'onBlur',
    resolver: valibotResolver(validationSchema),
    defaultValues: {
      supplier: 'nova-poshta',
      // todo: "optional" for now
      cityName: 'todo',
      postOfficeName: 'todo'
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

  const handleSubmit: SubmitHandler<FormValues> = async (values) => {
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
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
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
        </form>
      </FormProvider>
      <OrderSuccessModal open={isOrderSuccess} onClose={hanldeModalClose} />
    </div>
  )
}
