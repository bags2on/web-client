import React from 'react'
import { Formik, Form } from 'formik'
import { useTranslation } from 'react-i18next'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../common/TextInput'
import Button from '../../../common/Button'
import { makeStyles } from '@material-ui/core'
import { LoginSchema, LoginSchemaType } from '../../../utils/validationSchema'

const useStyles = makeStyles(() => ({
  root: {},
  emailField: {},
  passwordField: {},
  submitButton: {
    marginTop: '10px'
  }
}))

const LoginForm: React.FC = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const handleSubmit = (values: LoginSchemaType): void => {
    console.log(values)
  }

  const initialValues: LoginSchemaType = { email: '', password: '' }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={LoginSchema}>
      {(): React.ReactElement => (
        <Form noValidate>
          <FormControl fullWidth className={classes.emailField}>
            <TextInput name="email" type="email" placeholder={t('email')} />
          </FormControl>
          <FormControl fullWidth className={classes.passwordField}>
            <TextInput name="password" type="password" placeholder={t('password')} />
          </FormControl>
          <FormControl fullWidth className={classes.submitButton}>
            <Button darkLoader type="submit" color="secondary">
              {t('send')}
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
