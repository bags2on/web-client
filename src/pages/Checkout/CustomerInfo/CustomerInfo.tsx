import React from 'react'
import clsx from 'clsx'
import FormControl from '@material-ui/core/FormControl'
import Icon from '@material-ui/core/SvgIcon'
import TextInput from '../../../shared/FormFields/TextInput/TextInput'
import PhoneInput from '../../../shared/PhoneInput'
import { useFormikContext } from 'formik'
import { ReactComponent as AvatarIcon } from '../../../assets/svg/icons/avatar.svg'
import { CheckoutOrderType } from '../../../utils/validationSchema'
import { animated, useSpring } from 'react-spring'
import { makeStyles } from '@material-ui/core'
import Button from '../../../shared/Button/Button'

interface CustomerInfoProps {
  isEdit: boolean
  onEdit(): void
  onContinue(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30,
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#323232',
    borderRadius: 10,
    [theme.breakpoints.up('lg')]: {
      backgroundColor: 'transparent',
      borderRadius: 0
    }
  },
  titleWrapper: {
    position: 'relative',
    backgroundColor: theme.palette.type === 'light' ? '#e1e1e1' : '#343434',
    padding: '20px 10px 37px 10px',
    borderRadius: 10,
    transition: 'all 0.3s',
    [theme.breakpoints.up('lg')]: {
      backgroundColor: 'transparent',
      padding: '0'
    }
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    '& > h2': {
      margin: 0
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'center',
      marginBottom: 30
    },
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'start'
    }
  },
  titleWrapperExpand: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    marginBottom: 0,
    paddingBottom: 0
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xl')]: {
      maxWidth: 560
    }
  },
  formField: {
    flexBasis: '100%',
    '& > span': {
      fontSize: 15,
      color: theme.palette.type === 'light' ? '6a6a6a' : '#fff',
      fontWeight: 500,
      paddingLeft: 7,
      marginBottom: 5
    },
    ['@media screen and (min-width: 1000px)']: {
      flexBasis: '48%'
    }
  },
  divider: {
    [theme.breakpoints.up('lg')]: {
      marginTop: '15px',
      borderBottom: '2px solid',
      borderBottomColor: theme.palette.type === 'light' ? '#dcdcdc' : '#646464'
    }
  },
  listIcon: {
    fontSize: 32,
    lineHeight: '22px',
    color: '#979797',
    marginRight: 7
  },
  iconDone: {
    fill: 'limegreen'
  },
  animatedBox: {
    padding: '0 17px',
    [theme.breakpoints.up('lg')]: {
      padding: '0 5px',
      opacity: '1 !important',
      height: 'auto !important'
    }
  },
  editPlugHide: {
    display: 'none'
  },
  editPlug: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 10,
    color: 'var(--green-light)',
    borderRadius: 10,
    border: '2px solid var(--green-light)',
    padding: '5px 7px',
    fontWeight: 600,
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  сontinueButton: {
    backgroundColor: 'var(--green-light)',
    '&:hover': {
      backgroundColor: 'var(--green-light)'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  }
}))

const CustomerInfo: React.FC<CustomerInfoProps> = ({ isEdit, onEdit, onContinue }) => {
  const classes = useStyles()

  const { values } = useFormikContext<CheckoutOrderType>()

  const slideInStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isEdit ? 1 : 0,
      height: isEdit ? 445 : 0
    }
  })

  const handleNextClick = () => {
    onContinue()
  }

  return (
    <section className={classes.root}>
      <div
        className={clsx({
          [classes.titleWrapper]: true,
          [classes.titleWrapperExpand]: isEdit
        })}
        onClick={onEdit}
      >
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
        <span className={clsx(isEdit ? classes.editPlugHide : classes.editPlug)}>Изменить</span>
      </div>
      <animated.div style={{ ...slideInStyles, overflow: 'hidden' }} className={classes.animatedBox}>
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
            <span>Телефон</span>
            <PhoneInput name="phone" />
          </FormControl>
          <FormControl className={classes.formField}>
            <span>E-mail</span>
            <TextInput name="email" type="email" fullWidth />
          </FormControl>
        </div>
        <Button disableShadow fullWidth className={classes.сontinueButton} onClick={handleNextClick}>
          Продолжить
        </Button>
      </animated.div>
      <div className={classes.divider} />
    </section>
  )
}

export default CustomerInfo
