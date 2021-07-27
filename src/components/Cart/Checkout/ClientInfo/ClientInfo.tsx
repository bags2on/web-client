import React, { useRef } from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/SvgIcon'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../../shared/FormFields/TextInput/TextInput'
import PhoneInput from '../../../../shared/PhoneInput'
import Button from '../../../../shared/Button/Button'
import { CheckoutOrderType } from '../../../../utils/validationSchema'
import { useFormikContext } from 'formik'
import { ReactComponent as EditIcon } from '../../../../assets/svg/edit.svg'
import { ReactComponent as CheckIcon } from '../../../../assets/svg/check_mark.svg'
import { ReactComponent as ProfileIcon } from '../../../../assets/svg/contact.svg'
import { ReactComponent as PhoneIcon } from '../../../../assets/svg/phone.svg'
import { animated, useSpring } from 'react-spring'
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
    fontSize: 16,
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
  fieldText: {
    fontSize: 17
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
      margin: 0,
      fontSize: 16,
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
    fill: '#FF502B'
  },
  done: {
    fill: 'limegreen'
  }
}))

const ClientInfo: React.FC<ClientInfoProps> = ({ edit, onEdit }) => {
  const classes = useStyles()

  const ref = useRef(null)

  const { values, errors, touched, setFieldValue, setFieldError } = useFormikContext<CheckoutOrderType>()

  console.log(errors)

  const handleClearClick = (): void => {
    setFieldError('surname', '')
    setFieldValue('surname', '')

    setFieldError('name', '')
    setFieldValue('name', '')

    setFieldError('email', '')
    setFieldValue('email', '')

    setFieldError('phone', '')
    setFieldValue('phone', '')
  }

  function plug(n: number): React.ReactElement {
    return <span className={classes.plug}>{'-'.repeat(n)}</span>
  }

  const slideInStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: edit ? 1 : 0,
      height: edit ? 340 : 0
    }
  })

  return (
    <div className={classes.root}>
      <div className={classes.contentBox}>
        <div className={classes.header}>
          <span className={classes.subTitle}>Покупатель</span>
          <IconButton component="button" onClick={onEdit} className={classes.editButton}>
            {edit ? <CheckIcon /> : <EditIcon />}
          </IconButton>
        </div>
        <ul className={classes.previewList}>
          <li>
            <Icon
              component="span"
              className={clsx({
                [classes.listIcon]: true,
                [classes.error]: (!!errors.name || !!errors.surname) && (touched.name || touched.surname),
                [classes.done]: values.surname && values.name
              })}
            >
              <ProfileIcon />
            </Icon>
            <span className={classes.fieldText}>
              {values.name ? values.name : plug(5)}&nbsp;{values.surname ? values.surname : plug(5)}
            </span>
          </li>
          <li>
            <Icon
              component="span"
              className={clsx({
                [classes.listIcon]: true,
                [classes.error]: !!errors.email && touched.email,
                [classes.done]: !errors.email && values.email
              })}
            >
              <MailIcon />
            </Icon>
            <span className={classes.fieldText}>{values.email ? values.email : plug(10)}</span>
          </li>
          <li>
            <Icon
              component="span"
              className={clsx({
                [classes.listIcon]: true,
                [classes.error]: !!errors.phone && touched.phone,
                [classes.done]: !errors.phone && values.phone
              })}
            >
              <PhoneIcon />
            </Icon>
            <span className={classes.fieldText}>
              <NumberFormat
                className={clsx({
                  [classes.plug]: !values.phone
                })}
                value={values.phone}
                mask="-"
                displayType={'text'}
                format="+38 (###) ###-####"
                allowEmptyFormatting
              />
            </span>
          </li>
        </ul>
        <animated.div style={{ ...slideInStyles, overflow: 'hidden' }}>
          <div ref={ref}>
            <FormControl className={classes.formField}>
              <p>Имя</p>
              <TextInput name="name" />
            </FormControl>
            <FormControl className={classes.formField}>
              <p>Фамилия</p>
              <TextInput name="surname" />
            </FormControl>
            <FormControl className={classes.formField}>
              <p>Email</p>
              <TextInput name="email" type="email" />
            </FormControl>
            <FormControl className={classes.formField}>
              <p>Телефон</p>
              <PhoneInput name="phone" error={!!errors.phone} />
            </FormControl>
            <Button onClick={handleClearClick} disableShadow className={classes.clear}>
              очистить
            </Button>
          </div>
        </animated.div>
      </div>
    </div>
  )
}

export default React.memo(ClientInfo)
