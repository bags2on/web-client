import React from 'react'
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
    maxWidth: 1400,
    margin: '0 auto',
    padding: '20px 0',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  emptyCartBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100 * var(--vh))'
  },
  temp: {
    width: 800,
    padding: '20px 40px 20px 30px',
    backgroundColor: '#fff',
    borderRadius: 14
  }
}))

const Checkout: React.FC = () => {
  const classes = useStyles()

  const cart = useQuery(GET_CART_ITEMS)
  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  if (cart.data.cartItems.length === 0) return <Redirect to={routes.root} />

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
              <CustomerInfo />
              <Delivery />
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
