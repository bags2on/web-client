import React from 'react'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../../shared/TextInput'
import ImagePlaceholder from '../../../../shared/ImagePlaceholder'
import novaPoshtaImage from '../../../../assets/svg/nova_poshta.svg'
import justinImage from '../../../../assets/svg/justin.svg'
import { Field } from 'formik'
import { hiddenStyles } from '../../../../utils/styling'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    padding: '0 15px'
  },
  contentBox: {
    padding: '0 13px',
    boxShadow: '0px 1px 9px -1px rgba(0,0,0,0.1)'
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
    borderBottom: '1px solid #d2d2d7'
  },
  subTitle: {
    fontWeight: 500
  },
  editButton: {
    width: 43,
    height: 43,
    padding: 10
  },
  deliveriesList: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
    padding: '15px 0',
    listStyle: 'none',
    '& li': {
      flexBasis: '47%'
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
    borderRadius: 5,
    border: '1px solid #eeeeee',
    padding: '0 5px',
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
    display: 'flex',
    width: '100%',
    '& > p': {
      color: '#5a5a5a',
      paddingBottom: 5
    }
  }
}))

const Delivery: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.contentBox}>
        <div className={classes.titleWrapper}>
          <Typography component="span" className={classes.subTitle}>
            Служба доставки
          </Typography>
        </div>
        <ul className={classes.deliveriesList}>
          <li>
            <label className={classes.serviceLabel}>
              <Field type="radio" name="deliveryService" value="nova" className={classes.input} />
              <div className={classes.imageWrapper}>
                <ImagePlaceholder plain src={novaPoshtaImage} altText="логотип 'Новая Почта'" />
              </div>
            </label>
          </li>
          <li>
            <label className={classes.serviceLabel}>
              <Field type="radio" name="deliveryService" value="jus" className={classes.input} />
              <div className={classes.imageWrapper}>
                <ImagePlaceholder plain src={justinImage} altText="логотип 'Justin'" />
              </div>
            </label>
          </li>
        </ul>
        <FormControl className={classes.formField}>
          <Typography component="p">Ваш город</Typography>
          <TextInput name="cityId" />
        </FormControl>
        <FormControl className={classes.formField}>
          <Typography component="p">Выберите отделение</Typography>
          <TextInput name="postOfficeId" />
        </FormControl>
      </div>
    </div>
  )
}

export default Delivery
