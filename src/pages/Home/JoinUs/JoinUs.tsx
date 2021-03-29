import React from 'react'
import Button from '../../../shared/Button'
import { JoinUsSchema, JoinUsSchemaType } from '../../../utils/validationSchema'
import { Formik, Form, Field } from 'formik'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFCC00'
  },
  contentBox: {
    maxWidth: 1400,
    margin: '0 auto',
    padding: '13px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.up('desktop')]: {
      padding: '13px 0'
    }
  },
  title: {
    textAlign: 'center',
    fontSize: 21,
    margin: 0,
    fontWeight: 500,
    color: '#2f2f2f',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'start'
    }
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    margin: 0,
    color: '#2f2f2f',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 20
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 5,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.up('lg')]: {
      padding: 0,
      marginLeft: 'auto'
    }
  },
  input: {
    fontSize: 14,
    fontWeight: 500,
    outline: 'none',
    borderRadius: 4,
    border: '1px solid',
    color: theme.palette.type === 'light' ? '#3c4144' : '#fff',
    borderColor: theme.palette.type === 'light' ? '#c4c4c4' : '#3c4144',
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144',
    padding: '10px 20px 10px 15px',
    '&::placeholder': {
      color: theme.palette.type === 'light' ? '#3c4144' : '#c4c4c4'
    },
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    [theme.breakpoints.up('xl')]: {
      width: 320
    }
  },
  submitButton: {
    width: 193,
    margin: '0 auto',
    marginTop: 10,
    fontSize: 15,
    [theme.breakpoints.up('md')]: {
      margin: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    }
  }
}))

const JoinUs: React.FC = () => {
  const classes = useStyles()

  const handleSubmit = (values: JoinUsSchemaType): void => {
    console.log(values)
  }

  return (
    <div className={classes.root}>
      <div className={classes.contentBox}>
        <h4 className={classes.title}>Зарегистрируйтесь!</h4>
        <p className={classes.text}>
          ...и получайте скидки в <b>личном кабинете</b>
        </p>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            email: ''
          }}
          validationSchema={JoinUsSchema}
        >
          {(): React.ReactElement => (
            <Form className={classes.form} noValidate>
              <Field name="email" autoComplete="off" placeholder="Введите ваш email" className={classes.input} />
              <Button type="submit" className={classes.submitButton} withShadow={false} loading={false}>
                Присоединиться
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default JoinUs
