import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { useTranslation } from 'react-i18next'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../common/TextInput'
import Button from '../../../common/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  emailField: {
    margin: '10px 0'
  },
  passwordField: {
    margin: '10px 0 0 0'
  },
  submitButton: {
    marginTop: '10px'
  }
}))

interface FormInitialValues {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const classes = useStyles()
  const { t } = useTranslation()

  const handleSubmit = () => {
    console.log('submit')
  }

  const initialValues: FormInitialValues = { email: '', password: '' }

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {() => (
        <Form>
          <FormControl fullWidth className={classes.emailField}>
            <TextInput type="email" placeholder={t('email')} />
          </FormControl>
          <FormControl fullWidth className={classes.passwordField}>
            <TextInput type="password" placeholder={t('password')} />
          </FormControl>
          <FormControl fullWidth className={classes.submitButton}>
            <Button darkLoader type="submit" color="secondary" loading={loading} onClick={() => setLoading(!loading)}>
              {t('send')}
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
