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
    marginBottom: 30
  },
  titleWrapper: {
    position: 'relative',
    backgroundColor: '#e7e7e7',
    padding: '20px 10px 37px 10px',
    borderRadius: 10,
    transition: 'background-color 0.3s'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    // marginBottom: 30,
    marginBottom: 15,
    borderRadius: 10,
    '& > h2': {
      margin: 0
    }
  },
  titleWrapperExpand: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    marginBottom: 0
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
    [theme.breakpoints.up('lg')]: {
      marginTop: '15px',
      borderBottom: '2px solid #dcdcdc'
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
  editPlugHide: {
    display: 'none'
  },
  editPlug: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 9,
    color: 'var(--green-light)',
    borderRadius: 10,
    border: '2px solid var(--green-light)',
    padding: '5px 7px',
    fontWeight: 600
  },
  nextButton: {}
}))

const CustomerInfo: React.FC<CustomerInfoProps> = ({ isEdit, onEdit, onContinue }) => {
  const classes = useStyles()

  const { values } = useFormikContext<CheckoutOrderType>()

  const slideInStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isEdit ? 1 : 0,
      height: isEdit ? 440 : 0
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
      <animated.div style={{ ...slideInStyles, overflow: 'hidden' }}>
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
        <Button disableShadow fullWidth className={classes.nextButton} onClick={handleNextClick}>
          Далее
        </Button>
      </animated.div>
      <div className={classes.divider} />
    </section>
  )
}

export default CustomerInfo
