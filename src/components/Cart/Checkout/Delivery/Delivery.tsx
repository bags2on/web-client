import React from 'react'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../../shared/TextInput'
import ImagePlaceholder from '../../../../shared/ImagePlaceholder'
import novaPoshtaImage from '../../../../assets/svg/nova_poshta.svg'
import justinImage from '../../../../assets/svg/justin.svg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    padding: '0 15px'
  },
  subTitle: {
    fontWeight: 500
  },
  contentBox: {
    padding: '0 13px', // 10
    boxShadow: '0px 1px 9px -1px rgba(0,0,0,0.1)'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 0',
    borderBottom: '1px solid #d2d2d7'
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
    listStyle: 'none'
  },
  deliveryItem: {
    cursor: 'pointer',
    height: 83,
    flexBasis: '47%',
    borderRadius: 5,
    border: '1px solid #eeeeee',
    '&:hover': {
      borderColor: '#b0b0b0'
    }
  },
  deliveryWrapper: {
    padding: '10px 10px 0 18px'
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
        <div className={classes.header}>
          <Typography component="span" className={classes.subTitle}>
            Служба доставки
          </Typography>
        </div>
        <ul className={classes.deliveriesList}>
          <li className={classes.deliveryItem}>
            <ImagePlaceholder plain src={novaPoshtaImage} altText="Nova Poshta logo" />
          </li>
          <li className={classes.deliveryItem}>
            <ImagePlaceholder plain src={justinImage} altText="Justin logo" />
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
