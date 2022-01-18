import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../shared/FormFields/TextInput/TextInput'
import ImagePlaceholder from '../../../shared/ImagePlaceholder'
import novaPoshtaImage from '../../../assets/svg/nova_poshta.svg'
import urkPoshtaImage from '../../../assets/svg/ukr-poshta.svg'
import justinImage from '../../../assets/svg/justin.svg'
import Icon from '@material-ui/core/SvgIcon'
import Button from '../../../shared/Button/Button'
import { CheckoutOrderType } from '../../../utils/validationSchema'
import { ReactComponent as PinIcon } from '../../../assets/svg/icons/pin.svg'
import { Field, useFormikContext } from 'formik'
import { hiddenStyles } from '../../../utils/styling'
import { animated, useSpring } from 'react-spring'
import { makeStyles } from '@material-ui/core'

interface DeliveryProps {
  isEdit: boolean
  onEdit(): void
  onContinue(): void
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#323232',
    borderRadius: 10,
    [theme.breakpoints.up('lg')]: {
      backgroundColor: 'transparent',
      borderRadius: 'none'
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
    marginBottom: 15,
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
  listIcon: {
    fontSize: 34,
    lineHeight: '22px',
    color: '#979797',
    marginRight: 7
  },
  iconDone: {
    fill: 'limegreen'
  },
  deliveriesList: {
    display: 'flex',
    margin: 0,
    padding: '15px 0',
    listStyle: 'none',
    marginBottom: 15
  },
  deliveriesListItem: {
    flexBasis: '33%',
    margin: '0 5px',
    '-webkit-tap-highlight-color': 'transparent',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    [theme.breakpoints.up('xl')]: {
      flexBasis: '25%',
      margin: '0 10px'
    }
  },
  serviceLabel: {
    display: 'block'
  },
  input: {
    ...hiddenStyles,
    '&:checked + $imageWrapper': {
      borderColor: 'var(--green-light)',
      backgroundColor: theme.palette.type === 'light' ? 'rgba(50, 205, 50, .2)' : '#fff',
      '&::before': {
        transform: 'scale(1)',
        opacity: 1,
        backgroundColor: 'var(--green-light)',
        borderColor: 'var(--green-light)'
      }
    }
  },
  imageWrapper: {
    height: 83,
    cursor: 'pointer',
    position: 'relative',
    borderRadius: 10,
    border: '1px solid #d7d7d7',
    padding: '10px 10px',
    transition: 'border-color 0.3s',
    backgroundColor: '#fff',
    '&:hover': {
      borderColor: 'var(--green-light)'
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 7,
      left: 7,
      width: 15,
      height: 15,
      borderRadius: '50%',
      border: '1px solid #aeaeae',
      opacity: 0,
      // transform: 'scale(0)', // TODO: bounce?
      transition: '0.25s ease',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E")`,
      backgroundSize: '12px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%'
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
  animatedBox: {
    padding: '0 10px',
    [theme.breakpoints.up('lg')]: {
      opacity: '1 !important',
      height: 'auto !important'
    }
  },
  formField: {
    width: '100%',
    '& > span': {
      fontSize: 15,
      color: theme.palette.type === 'light' ? '6a6a6a' : '#fff',
      fontWeight: 500,
      paddingLeft: 7,
      marginBottom: 5
    },
    ['@media screen and (min-width: 1000px)']: {
      maxWidth: 300
    }
  },
  areaContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'flex-start'
    }
  },
  cityField: {
    [theme.breakpoints.up('xl')]: {
      width: 230,
      marginLeft: 25
    }
  },
  postField: {},
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

const API_URL = process.env.REACT_APP_API_URL

type area = {
  id: string
  name: string
  areas: Array<area>
}
interface AreasType {
  name: string
  areas: Array<area>
}

const Delivery: React.FC<DeliveryProps> = ({ isEdit, onEdit, onContinue }) => {
  const classes = useStyles()

  const { values } = useFormikContext<CheckoutOrderType>()

  const [areas, setAreas] = useState<AreasType>()
  const [areasLoading, setAreasLoading] = useState<boolean>(true)

  const slideInStyles = useSpring({
    config: { duration: 250 },
    from: { opacity: 0, height: 0 },
    to: {
      opacity: isEdit ? 1 : 0,
      height: isEdit ? 475 : 0
    }
  })

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    fetch(API_URL + '/areas', { signal }).then(async (resp) => {
      const data = await resp.json()
      setAreas(data)
      setAreasLoading(false)
    })

    return () => {
      controller.abort()
    }
  }, [])

  const areasOptions =
    areas?.areas.map(({ name }) => ({
      label: name,
      value: name
    })) || []

  const cities = areas?.areas.find((currentArea) => currentArea.name === values.region)?.areas

  const citiesOptions =
    cities?.map((city) => ({
      label: city.name,
      value: city.name
    })) || []

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
              [classes.iconDone]: values.region && values.cityId && values.postOfficeId
            })}
          >
            <PinIcon />
          </Icon>
          <h2>Способ доставки</h2>
        </div>
        <span className={clsx(isEdit ? classes.editPlugHide : classes.editPlug)}>Изменить</span>
      </div>
      <animated.div style={{ ...slideInStyles, overflow: 'hidden' }} className={classes.animatedBox}>
        <ul className={classes.deliveriesList}>
          <li className={classes.deliveriesListItem}>
            <label className={classes.serviceLabel}>
              <Field type="radio" name="supplier" value="nova-poshta" className={classes.input} />
              <div className={classes.imageWrapper}>
                <ImagePlaceholder plain src={novaPoshtaImage} altText="логотип 'Новая Почта'" />
              </div>
            </label>
          </li>
          <li className={classes.deliveriesListItem}>
            <label className={classes.serviceLabel}>
              <Field type="radio" name="supplier" value="url-poshta" className={classes.input} />
              <div className={classes.imageWrapper}>
                <ImagePlaceholder plain src={urkPoshtaImage} altText="логотип 'Укр Почта'" />
              </div>
            </label>
          </li>
          <li className={classes.deliveriesListItem}>
            <label className={classes.serviceLabel}>
              <Field type="radio" name="supplier" value="justin" className={classes.input} />
              <div className={classes.imageWrapper}>
                <ImagePlaceholder plain src={justinImage} altText="логотип 'Justin'" />
              </div>
            </label>
          </li>
        </ul>
        <div className={classes.areaContainer}>
          <FormControl className={classes.formField}>
            <span>Область</span>
            <TextInput name="region" disabled={areasLoading} select fullWidth options={areasOptions} />
          </FormControl>
          <FormControl className={clsx(classes.formField, classes.cityField)}>
            <span>Город</span>
            <TextInput name="cityId" select disabled={!values.region} fullWidth options={citiesOptions} />
          </FormControl>
        </div>
        <FormControl className={classes.formField}>
          <span>Выберите отделение</span>
          <TextInput name="postOfficeId" />
        </FormControl>
        <Button disableShadow fullWidth onClick={onContinue} className={classes.сontinueButton}>
          Продолжить
        </Button>
      </animated.div>
    </section>
  )
}

export default Delivery
