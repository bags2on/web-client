import React from 'react'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../shared/TextInput'
import Button from '../../../shared/Button'
import { useMutation } from '@apollo/react-hooks'
import { Formik, Form } from 'formik'
import { CheckoutOrderSchema } from '../../../utils/validationSchema'
import { makeStyles } from '@material-ui/core'
import { CREATE_ORDER } from '../../../graphql/order'

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    margin: 18,
    fontSize: 22,
    fontWeight: 500,
    textAlign: 'center'
  },
  wrapper: {
    padding: '30px 20px 0 25px'
  },
  deliveryWrapper: {
    padding: '10px 10px 0 18px'
  },

  levelFormField: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& > p': {
      color: '#5a5a5a',
      flexBasis: '20%',
      paddingBottom: 24,
      alignSelf: 'center'
    }
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
  const [createOrder, { loading }] = useMutation(CREATE_ORDER)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    console.log(values)

    try {
      const req = createOrder({
        variables: { ...values }
      })

      console.log(req)
    } catch (error) {
      console.log('CREATE_ORDER error: ', error)
    }
  }

  return (
    <div className={classes.root}>
      <Formik
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
            <Typography component="h3" className={classes.title}>
              Заполните форму
            </Typography>
            <div className={classes.wrapper}>
              <FormControl className={classes.levelFormField}>
                <Typography component="p">Фамилия</Typography>
                <TextInput name="surname" />
              </FormControl>
              <FormControl className={classes.levelFormField}>
                <Typography component="p">Имя</Typography>
                <TextInput name="name" />
              </FormControl>
              <FormControl className={classes.levelFormField}>
                <Typography component="p">Email</Typography>
                <TextInput name="email" type="email" />
              </FormControl>
              <FormControl className={classes.levelFormField}>
                <Typography component="p">Телефон</Typography>
                <TextInput name="phone" />
              </FormControl>
            </div>
            <div className={classes.deliveryWrapper}>
              <Typography component="p" className={classes.deliveryInfoTitle}>
                {/* TODO: ! - icon */}! Доставка осуществляется в отделения&nbsp;
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Checkout
