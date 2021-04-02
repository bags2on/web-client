import React from 'react'
import ClientInfo from './ClientInfo/ClientInfo'
import { useMutation } from '@apollo/react-hooks'
import { Formik, Form } from 'formik'
import { CheckoutOrderSchema } from '../../../utils/validationSchema'
import { makeStyles } from '@material-ui/core'
import { CREATE_ORDER } from '../../../graphql/order'
import { CreateOrder, CreateOrderVariables } from '../../../graphql/order/_types_/CreateOrder'

const useStyles = makeStyles(() => ({
  root: {},
  deliveryWrapper: {
    padding: '10px 10px 0 18px'
  },
  formField: {
    display: 'flex',
    '& > p': {
      color: '#5a5a5a',
      paddingBottom: 5
    }
  },
  deliveryInfoTitle: {
    fontSize: 13,
    color: '#6c757d',
    paddingBottom: 10,
    '& > strong': {
      fontSize: 'inherit'
    }
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

const Checkout: React.FC = () => {
  const classes = useStyles()
  const [createOrder, { loading }] = useMutation<CreateOrder, CreateOrderVariables>(CREATE_ORDER)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any): Promise<void> => {
    console.log(values)

    try {
      const req = await createOrder({
        variables: { ...values, x: 10 }
      })

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
            <ClientInfo />
            {/*
            <div className={classes.deliveryWrapper}>
              <Typography component="p" className={classes.deliveryInfoTitle}>
                ! Доставка осуществляется в отделения&nbsp;
                <Typography component="strong">«Новая Почта»</Typography>
              </Typography>
              <FormControl className={classes.formField}>
                <Typography component="p">Ваш город</Typography>
                <TextInput name="cityId" />
              </FormControl>
              <FormControl className={classes.formField}>
                <Typography component="p">Выберите отделение</Typography>
                <TextInput name="postOfficeId" />
              </FormControl>
            </div>
            <div className={classes.submitContainer}>
              <Button fullWidth type="submit" loading={loading} color="secondary">
                Заказ подтверждаю
              </Button>
              <Typography component="p" className={classes.submitTitle}>
                Подтверждая заказ, я принимаю условия пользовательского соглашения
              </Typography>
            </div> */}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
