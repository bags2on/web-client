import React from 'react'
import clsx from 'clsx'
import Button from '../../../shared/Button/Button'
import { JoinUsSchema, JoinUsSchemaType } from '../../../utils/validationSchema'
import { Formik, Form, Field } from 'formik'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main
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
    transition: 'all 300ms',
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
  inputError: {
    animation: '$error-blink 300ms ease-in-out'
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
  },
  '@keyframes error-blink': {
    '0%': {
      borderColor: theme.palette.type === 'light' ? '#c4c4c4' : '#3c4144'
    },
    '50%': {
      borderColor: '#FF502B'
    },
    '100%': {
      borderColor: theme.palette.type === 'light' ? '#c4c4c4' : '#3c4144'
    }
  }
}))

const JoinUs: React.FC = () => {
  const classes = useStyles()

  const handleSubmit = (values: JoinUsSchemaType): void => {
    console.log('submit')

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
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={handleSubmit}
          initialValues={{
            email: ''
          }}
          validationSchema={JoinUsSchema}
        >
          {({ errors, touched, setErrors }): React.ReactElement => (
            <Form className={classes.form} noValidate>
              {console.log(errors)}
              <Field
                onAnimationEnd={(): void => {
                  setErrors({})
                }}
                name="email"
                autoComplete="off"
                placeholder="Введите ваш email"
                className={clsx({
                  [classes.input]: true,
                  [classes.inputError]: errors.email && touched.email
                })}
              />
              <Button type="submit" className={classes.submitButton} disableShadow loading={false}>
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
