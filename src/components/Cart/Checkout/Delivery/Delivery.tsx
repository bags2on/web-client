import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../../../shared/TextInput'
import novaPoshtaImage from '../../../../assets/svg/nova_poshta.svg'
import justinImage from '../../../../assets/svg/justin.svg'
import { Motion, spring, presets } from 'react-motion'
import { ReactComponent as EditIcon } from '../../../../assets/svg/edit.svg'
import { ReactComponent as CheckIcon } from '../../../../assets/svg/check_mark.svg'
import { makeStyles } from '@material-ui/core'

interface DeliveryProps {
  edit: boolean
  onEdit(): void
}

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
    padding: '10px 0',
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
    padding: 10,
    flexBasis: '47%',
    border: '1px solid #eeeeee',
    '&:hover': {
      borderColor: '#b0b0b0'
    }
  },
  novaIcon: {},
  justinIcon: {},
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

const Delivery: React.FC<DeliveryProps> = ({ edit, onEdit }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.contentBox}>
        <div className={classes.header}>
          <Typography component="span" className={classes.subTitle}>
            Служба доставки
          </Typography>
          <IconButton component="button" onClick={onEdit} className={classes.editButton}>
            {edit ? <CheckIcon /> : <EditIcon />}
          </IconButton>
        </div>
        <ul className={classes.deliveriesList}>
          <li className={classes.deliveryItem}>
            {/*  className={classes.novaIcon}> */}
            <img src={novaPoshtaImage} alt="Nova Poshta logo" />
          </li>
          <li className={classes.deliveryItem}>
            {/*  className={classes.justinIcon}> */}
            <img src={justinImage} alt="Justin logo" />
          </li>
        </ul>

        <Motion
          style={
            edit
              ? {
                  opacity: spring(1),
                  height: spring(220, presets.wobbly)
                }
              : { opacity: 0, height: 0 }
          }
        >
          {(interpolatedStyles): React.ReactElement => {
            return (
              <div
                style={{
                  height: `${interpolatedStyles.height}px`,
                  opacity: interpolatedStyles.opacity
                }}
              >
                <FormControl className={classes.formField}>
                  <Typography component="p">Ваш город</Typography>
                  <TextInput name="cityId" />
                </FormControl>
                <FormControl className={classes.formField}>
                  <Typography component="p">Выберите отделение</Typography>
                  <TextInput name="postOfficeId" />
                </FormControl>
              </div>
            )
          }}
        </Motion>
      </div>
    </div>
  )
}

export default Delivery
