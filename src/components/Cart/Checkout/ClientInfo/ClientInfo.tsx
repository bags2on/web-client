import React from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/SvgIcon'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../../shared/TextInput'
import PhoneInput from '../../../../shared/PhoneInput'
import Button from '../../../../shared/Button'
import { CheckoutOrderType } from '../../../../utils/validationSchema'
import { useFormikContext } from 'formik'
import { ReactComponent as EditIcon } from '../../../../assets/svg/edit.svg'
import { ReactComponent as CheckIcon } from '../../../../assets/svg/check_mark.svg'
import { ReactComponent as ProfileIcon } from '../../../../assets/svg/contact.svg'
import { ReactComponent as PhoneIcon } from '../../../../assets/svg/phone.svg'
// import { ReactComponent as PinIcon } from '../../../../assets/svg/pin.svg'
import { ReactComponent as MailIcon } from '../../../../assets/svg/mail.svg'
import NumberFormat from 'react-number-format'
import { makeStyles } from '@material-ui/core'

interface ClientInfoProps {
  edit: boolean
  onEdit(): void
}

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 15px'
  },
  contentBox: {
    padding: '0 13px',
    boxShadow: '0px 1px 9px -1px rgba(0,0,0,0.1)'
  },
  subTitle: {
    fontWeight: 500
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #d2d2d7'
  },
  editButton: {
    width: 43,
    height: 43,
    padding: 10
  },
  previewList: {
    margin: 0,
    padding: '15px 0',
    listStyle: 'none',
    '& > li': {
      marginBottom: 7,
      display: 'flex',
      alignItems: 'center'
    }
  },
  listIcon: {
    fontSize: 20,
    lineHeight: '23px',
    color: '#979797',
    marginRight: 10
  },
  formField: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& > p': {
      color: '#5a5a5a',
      flexBasis: '30%',
      paddingBottom: 24,
      alignSelf: 'center'
    },
    '& > div': {
      flexBasis: '70%'
    }
  },
  plug: {
    fontSize: 17,
    fontWeight: 700,
    color: '#888888'
  },
  clear: {
    display: 'block',
    fontSize: 14,
    padding: '3px 4px',
    margin: '0 auto',
    marginTop: 10
  },
  error: {
    color: '#FF502B'
  }
}))

const ClientInfo: React.FC<ClientInfoProps> = ({ edit, onEdit }) => {
  const classes = useStyles()

  const { values, errors, touched, setFieldValue } = useFormikContext<CheckoutOrderType>()

  console.log(errors)

  const handleClearClick = (): void => {
    setFieldValue('surname', '')
    setFieldValue('name', '')
    setFieldValue('email', '')
    setFieldValue('phone', '')
  }

  function plug(n: number): React.ReactElement {
    return <span className={classes.plug}>{'-'.repeat(n)}</span>
  }

  return (
    <div className={classes.root}>
      <div className={classes.contentBox}>
        <div className={classes.header}>
          <Typography component="span" className={classes.subTitle}>
            Покупатель
          </Typography>
          <IconButton component="button" onClick={onEdit} className={classes.editButton}>
            {!edit ? <CheckIcon /> : <EditIcon />}
          </IconButton>
        </div>
        <ul className={classes.previewList}>
          <li>
            <Icon component="span" className={classes.listIcon}>
              <ProfileIcon />
            </Icon>
            <Typography
              component="p"
              className={clsx({
                [classes.error]: !!errors.name && touched.name
              })}
            >
              {values.name ? values.name : plug(5)}&nbsp;{values.surname ? values.surname : plug(5)}
            </Typography>
          </li>
          {/* <li>
            <Icon component="span" className={classes.listIcon}>
              <PinIcon />
            </Icon>
            <Typography component="span">Loss Angeles, California, USA</Typography>
          </li> */}
          <li>
            <Icon component="span" className={classes.listIcon}>
              <MailIcon />
            </Icon>
            <Typography
              component="span"
              className={clsx({
                [classes.error]: !!errors.email && touched.email
              })}
            >
              {values.email ? values.email : plug(10)}
            </Typography>
          </li>
          <li>
            <Icon component="span" className={classes.listIcon}>
              <PhoneIcon />
            </Icon>
            <Typography
              component="span"
              className={clsx({
                [classes.error]: !!errors.phone && touched.phone
              })}
            >
              <NumberFormat
                value={values.phone}
                mask="-"
                displayType={'text'}
                format="+38 (###) ###-####"
                allowEmptyFormatting
              />
            </Typography>
          </li>
        </ul>
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
        </FormControl>
        <Button onClick={handleClearClick} withShadow={false} className={classes.clear}>
          очистить
        </Button>
      </div>
    </div>
  )
}

export default React.memo(ClientInfo)
