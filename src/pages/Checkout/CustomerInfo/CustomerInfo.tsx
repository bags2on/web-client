import React from 'react'
import clsx from 'clsx'
import FormControl from '@material-ui/core/FormControl'
import Icon from '@material-ui/core/SvgIcon'
import TextInput from '../../../shared/FormFields/TextInput/TextInput'
import PhoneInput from '../../../shared/PhoneInput'
import { useFormikContext } from 'formik'
import { ReactComponent as AvatarIcon } from '../../../assets/svg/icons/avatar.svg'
import { CheckoutOrderType } from '../../../utils/validationSchema'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 30
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
    '& > h2': {
      margin: 0
    }
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formField: {
    flexBasis: '50%',
    maxWidth: 250,
    marginRight: 50
  },
  divider: {
    marginTop: '15px',
    borderBottom: '2px solid #dcdcdc'
  },
  listIcon: {
    fontSize: 22,
    lineHeight: '22px',
    color: '#979797',
    marginRight: 7
  },
  iconDone: {
    fill: 'limegreen'
  }
}))

const CustomerInfo: React.FC = () => {
  const classes = useStyles()

  const { values } = useFormikContext<CheckoutOrderType>()

  return (
    <section className={classes.root}>
      <div className={classes.title}>
        <Icon
          component="span"
          className={clsx({
            [classes.listIcon]: true,
            [classes.iconDone]: values.surname && values.name && values.phone && values.email
          })}
        >
          <AvatarIcon />
        </Icon>
        <h2>Контактная информация</h2>
      </div>
      <div className={classes.wrapper}>
        <FormControl className={classes.formField}>
          <span>Имя</span>
          <TextInput name="name" fullWidth />
        </FormControl>
        <FormControl className={classes.formField}>
          <span>Фамилия</span>
          <TextInput name="surname" fullWidth />
        </FormControl>
        <FormControl className={classes.formField}>
          <span>Телефон:</span>
          <PhoneInput name="phone" />
        </FormControl>
        <FormControl className={classes.formField}>
          <span>E-mail</span>
          <TextInput name="email" type="email" fullWidth />
        </FormControl>
      </div>
      <div className={classes.divider} />
    </section>
  )
}

export default CustomerInfo
