import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import ClientInfo from './ClientInfo/ClientInfo'
import Button from '../../../shared/Button'
import Delivery from './Delivery/Delivery'
import { useMutation } from '@apollo/client'
import { Formik, Form } from 'formik'
import { CheckoutOrderSchema } from '../../../utils/validationSchema'
import { makeStyles } from '@material-ui/core'
import { CREATE_ORDER } from '../../../graphql/order'

interface CheckoutProps {
  onConfirm(): void
}

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 7,
    textAlign: 'center'
  },
  submitTitle: {
    fontSize: 13,
    color: '#6c757d',
    marginTop: 15,
    paddingLeft: 3
  },
  submitContainer: {
    padding: '10px 20px'
  }
}))

const Checkout: React.FC<CheckoutProps> = ({ onConfirm }) => {
  const classes = useStyles()

  const [isEdit, setEdit] = useState<boolean>(false)

  const handleEditChange = (): void => {
    setEdit(!isEdit)
  }

  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any): Promise<void> => {
    console.log(values)

    try {
      const req = await createOrder({
        variables: { ...values }
      })

      onConfirm()

      console.log(req)
    } catch (error) {
      console.log('CREATE_ORDER error: ', error)
    }
  }

  return (
    <div className={classes.root}>
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
          cityId: '',
          postOfficeId: 'sfh34i'
        }}
      >
        {(): React.ReactElement => (
          <Form>
            <Typography component="h5" className={classes.title}>
              Заполните форму
            </Typography>
            <Delivery />
            <ClientInfo edit={isEdit} onEdit={handleEditChange} />

            <div className={classes.submitContainer}>
              <Button fullWidth type="submit" loading={loading} color="secondary">
                Заказ подтверждаю
              </Button>
              <Typography component="p" className={classes.submitTitle}>
                Подтверждая заказ, я принимаю условия пользовательского соглашения
              </Typography>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
