import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Button from '../../../shared/Button/Button'
import TextInput from '../../../shared/TextInput'
import PhoneInput from '../../../shared/PhoneInput'
import { Formik, Form } from 'formik'
import { makeStyles } from '@material-ui/core'
import { AccountSettingsSchema } from '../../../utils/validationSchema'

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 20
  },
  title: {},
  formField: {},
  submitButton: {
    maxWidth: '300px'
  }
}))

const AccountSettings: React.FC = () => {
  const classes = useStyles()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any): Promise<void> => {
    console.log(values)
  }

  return (
    <div className={classes.root}>
      <Formik
        validateOnBlur
        validateOnChange={false}
        onSubmit={handleSubmit}
        validationSchema={AccountSettingsSchema}
        initialValues={{
          name: '',
          surname: '',
          email: '',
          phone: '',
          city: ''
        }}
      >
        {(): React.ReactElement => (
          <Form>
            {/* <Typography component="h5" className={classes.title}>
              Заполните форму
            </Typography> */}
            <FormControl className={classes.formField}>
              <Typography component="p">Имя</Typography>
              <TextInput name="name" />
            </FormControl>
            <FormControl className={classes.formField}>
              <Typography component="p">Фамилия</Typography>
              <TextInput name="surname" />
            </FormControl>
            <FormControl className={classes.formField}>
              <Typography component="p">Email</Typography>
              <TextInput name="email" type="email" />
            </FormControl>
            <FormControl className={classes.formField}>
              <Typography component="p">Телефон</Typography>
              <PhoneInput name="phone" />
              {/* error={!!errors.phone} */}
            </FormControl>
            <Button
              type="submit"
              fullWidth
              disableShadow
              //   loading={loading}
              //   disabled={loading}
              darkLoader
              className={classes.submitButton}
              color="secondary"
            >
              сохранить
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AccountSettings
