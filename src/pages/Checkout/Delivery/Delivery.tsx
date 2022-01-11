import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../shared/FormFields/TextInput/TextInput'
import ImagePlaceholder from '../../../shared/ImagePlaceholder'
import novaPoshtaImage from '../../../assets/svg/nova_poshta.svg'
import urkPoshtaImage from '../../../assets/svg/ukr-poshta.svg'
import justinImage from '../../../assets/svg/justin.svg'
import Icon from '@material-ui/core/SvgIcon'
import { CheckoutOrderType } from '../../../utils/validationSchema'
import { ReactComponent as PinIcon } from '../../../assets/svg/icons/pin.svg'
import { Field, useFormikContext } from 'formik'
import { hiddenStyles } from '../../../utils/styling'
import { makeStyles } from '@material-ui/core'

const API_URL = process.env.REACT_APP_API_URL

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 25,
    '& > h2': {
      margin: 0
    }
  },
  listIcon: {
    fontSize: 22,
    lineHeight: '22px',
    color: '#979797',
    marginRight: 7
  },
  iconDone: {
    fill: 'limegreen'
  },
  editButton: {
    width: 43,
    height: 43,
    padding: 10
  },
  deliveriesList: {
    display: 'flex',
    margin: 0,
    padding: '15px 0',
    listStyle: 'none',
    marginBottom: 15,
    '& li': {
      flexBasis: '25%',
      marginRight: 11
    }
  },
  serviceLabel: {
    display: 'block'
  },
  input: {
    ...hiddenStyles,
    '&:checked + $imageWrapper': {
      borderColor: 'var(--green-light)',
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
    border: '1px solid #eeeeee',
    padding: '10px 10px',
    transition: 'border-color 0.3s',
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
      transform: 'scale(0)',
      transition: '0.25s ease',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E")`,
      backgroundSize: '12px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%'
    }
  },
  formField: {
    width: '100%',
    maxWidth: 300,
    display: 'flex',
    '& > span': {
      //   fontSize: 16,
      //   color: '#5a5a5a',
      //   paddingBottom: 5
    }
  },
  areaContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  cityField: {
    marginLeft: 25,
    width: 230
  },
  postField: {}
}))

type area = {
  id: string
  name: string
  areas: Array<area>
}
interface AreasType {
  name: string
  areas: Array<area>
}

const Delivery: React.FC = () => {
  const classes = useStyles()

  const { values } = useFormikContext<CheckoutOrderType>()

  const [areas, setAreas] = useState<AreasType>()
  const [areasLoading, setAreasLoading] = useState<boolean>(true)

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
    <div className={classes.root}>
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
        <h2>Доставка</h2>
      </div>
      <ul className={classes.deliveriesList}>
        <li>
          <label className={classes.serviceLabel}>
            <Field type="radio" name="supplier" value="nova-poshta" className={classes.input} />
            <div className={classes.imageWrapper}>
              <ImagePlaceholder plain src={novaPoshtaImage} altText="логотип 'Новая Почта'" />
            </div>
          </label>
        </li>
        <li>
          <label className={classes.serviceLabel}>
            <Field type="radio" name="supplier" value="url-poshta" className={classes.input} />
            <div className={classes.imageWrapper}>
              <ImagePlaceholder plain src={urkPoshtaImage} altText="логотип 'Укр Почта'" />
            </div>
          </label>
        </li>
        <li>
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
    </div>
  )
}

export default Delivery
