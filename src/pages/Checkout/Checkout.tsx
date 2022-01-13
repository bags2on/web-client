import React, { useState } from 'react'
import CustomerInfo from './CustomerInfo/CustomerInfo'
import Delivery from './Delivery/Delivery'
import Preview from './Preview/Preview'
import routes from '../../utils/routes'
import { useMutation } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { GET_CART_ITEMS } from '../../apollo/cache/queries/cart'
import { CheckoutOrderSchema, CheckoutOrderType } from '../../utils/validationSchema'
import { Formik, Form } from 'formik'
import { CREATE_ORDER } from '../../graphql/order'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.type === 'light' ? '#f3f3f3' : '#282828'
  },
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1400,
      margin: '0 auto',
      padding: '20px 0'
    }
  },
  emptyCartBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100 * var(--vh))'
  },
  temp: {
    padding: '20px 10px 20px 10px',
    backgroundColor: '#fff',
    [theme.breakpoints.up('lg')]: {
      width: 800,
      borderRadius: 14,
      padding: '20px 40px 20px 30px'
    }
  }
}))

const Checkout: React.FC = () => {
  const classes = useStyles()
  const [isInfoEdit, setInfoEdit] = useState<boolean>(false)
  const [isDeliveryEdit, setDeliveryEdit] = useState<boolean>(false)

  const cart = useQuery(GET_CART_ITEMS)
  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  if (cart.data.cartItems.length === 0) return <Redirect to={routes.root} />

  const handleInfoEditOpen = (): void => {
    if (isDeliveryEdit) setDeliveryEdit(false)
    setInfoEdit((prev) => !prev)
  }

  const handleDeliveryEditOpen = (): void => {
    if (isInfoEdit) setInfoEdit(false)
    setDeliveryEdit((prev) => !prev)
  }

  const handleContinue = () => {
    setInfoEdit(false)
    setDeliveryEdit(true)
  }

  const handleSubmit = async (values: CheckoutOrderType): Promise<void> => {
    console.log(values)

    try {
      const req = await createOrder({
        variables: { ...values }
      })

      console.log(req)
    } catch (error) {
      console.log('CREATE_ORDER error: ', error)
    }
  }

  return (
    <div className={classes.wrapper}>
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
          <Form className={classes.root}>
            <div className={classes.temp}>
              <CustomerInfo isEdit={isInfoEdit} onEdit={handleInfoEditOpen} onContinue={handleContinue} />
              <Delivery isEdit={isDeliveryEdit} onEdit={handleDeliveryEditOpen} />
            </div>
            <div>
              <Preview submitLoading={loading} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
