import React, { useState, useEffect } from 'react'
import CustomerInfo from './CustomerInfo/CustomerInfo'
import Delivery from './Delivery/Delivery'
import Preview from './Preview/Preview'
import Modal from './Modal'
import routes from '../../utils/routes'
import { useMutation } from '@apollo/client'
import { useQuery } from '@apollo/client'
import { GET_CART_ITEMS } from '../../apollo/cache/queries/cart'
import { CheckoutOrderSchema, CheckoutOrderType } from '../../utils/validationSchema'
import { Formik, Form } from 'formik'
import { CREATE_ORDER } from '../../graphql/order'
import { Redirect } from 'react-router-dom'
import { useWindowRatio } from '../../hooks'
import { makeStyles } from '@material-ui/core'
import history from '../../utils/history'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.type === 'light' ? '#f3f3f3' : 'transparent'
  },
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1400,
      flexWrap: 'nowrap',
      margin: '0 auto',
      padding: '20px 7px'
    }
  },
  emptyCartBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100 * var(--vh))'
  },
  mainBox: {
    padding: '20px 10px 20px 10px',
    backgroundColor: theme.palette.type === 'light' ? '#f2f2f2' : 'transparent',
    [theme.breakpoints.up('lg')]: {
      borderRadius: 14,
      marginRight: 20,
      backgroundColor: theme.palette.type === 'light' ? '#fff' : '#323232'
    },
    [theme.breakpoints.up('xl')]: {
      padding: '20px 40px 20px 30px',
      flexBasis: '65%'
    }
  },
  wrapBox: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 'auto'
    }
  }
}))

const Checkout: React.FC = () => {
  const classes = useStyles()
  const [windowWidth] = useWindowRatio()

  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [orderErr, setOrderErr] = useState<boolean>(false)

  const [isInfoEdit, setInfoEdit] = useState<boolean>(false)
  const [isDeliveryEdit, setDeliveryEdit] = useState<boolean>(false)

  const cart = useQuery(GET_CART_ITEMS)
  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (cart.data.cartItems.length === 0) return <Redirect to={routes.root} />

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
            <div className={classes.mainBox}>
              <CustomerInfo isEdit={isInfoEdit} onEdit={handleInfoEditOpen} onContinue={handleInfoChecked} />
              <Delivery isEdit={isDeliveryEdit} onEdit={handleDeliveryEditOpen} onContinue={handleDeliveryChecked} />
            </div>
            <div className={classes.wrapBox}>
              <Preview submitLoading={loading} orderCreationErr={orderErr} />
            </div>
          </Form>
        )}
      </Formik>
      <Modal open={isModalOpen} onClose={hanldeModalClose} />
    </div>
  )
}

export default Checkout
