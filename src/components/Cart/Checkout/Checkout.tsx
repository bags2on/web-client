import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import ClientInfo from './ClientInfo/ClientInfo'
import Button from '../../../shared/Button/Button'
import Delivery from './Delivery/Delivery'
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import { useMutation } from '@apollo/client'
import { Formik, Form } from 'formik'
import { CheckoutOrderSchema } from '../../../utils/validationSchema'
import { makeStyles } from '@material-ui/core'
import { CREATE_ORDER } from '../../../graphql/order'

interface CheckoutProps {
  onConfirm(): void
  onBack(): void
}

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 7,
    textAlign: 'center'
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px'
  },
  submitButton: {
    flexBasis: '65%'
  },
  backButton: {
    flexBasis: '30%'
  },
  conditions: {
    padding: '0 20px',
    '& > p': {
      textAlign: 'center',
      fontSize: 13,
      color: '#6c757d',
      paddingLeft: 3
    }
  }
}))

const Checkout: React.FC<CheckoutProps> = ({ onConfirm, onBack }) => {
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
          deliveryService: 'nova',
          areaId: '', // TODO: add
          cityId: '',
          postOfficeId: 'sfh34i'
        }}
      >
        {(): React.ReactElement => (
          <Form>
            <Typography component="h5" className={classes.title}>
              Заполните форму
            </Typography>
            <ClientInfo edit={isEdit} onEdit={handleEditChange} />
            <Delivery />
            <div className={classes.submitContainer}>
              <Button onClick={onBack} disableShadow className={classes.backButton} startIcon={<ArrowLeftIcon />}>
                Назад
              </Button>
              <Button
                type="submit"
                disableShadow
                loading={loading}
                disabled={loading}
                darkLoader
                className={classes.submitButton}
                color="secondary"
              >
                Заказ подтверждаю
              </Button>
            </div>
            <div className={classes.conditions}>
              <Typography component="p">Подтверждая заказ, я принимаю условия пользовательского соглашения</Typography>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
