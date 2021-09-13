import React from 'react'
import { ReactComponent as MaterialIcon } from '../../../../assets/svg/product-material.svg'
import { ReactComponent as ColorIcon } from '../../../../assets/svg/product-color.svg'
import { ReactComponent as GenderIcon } from '../../../../assets/svg/product-gender.svg'
import { ReactComponent as CategoryIcon } from '../../../../assets/svg/product-category.svg'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    marginTop: 30,
    padding: '15px 20px 5px 20px',
    listStyle: 'none',
    borderRadius: 10,
    boxShadow: '0px 1px 9px -1px rgba(0, 0, 0, 0.1)',
    fontWeight: 500,
    backgroundColor: theme.palette.type === 'dark' ? '#363636' : '#fff'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '50%',
    fontSize: 17,
    marginBottom: 17,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start'
    }
  },
  itemIcon: {
    width: 45,
    marginRight: 20,
    '& svg': {
      fill: theme.palette.type === 'dark' ? '#c0c0c0' : '#343434'
    }
  },
  itemInfo: {
    '& p': {
      fontSize: 14,
      color: '#939191',
      margin: 0,
      userSelect: 'none'
    },
    '& span': {
      fontSize: 16
    }
  }
}))

interface FeaturesProps {
  color: string
  material: string
  type: string
  category: string
}

const Features: React.FC<FeaturesProps> = ({ color, material, type, category }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <ul className={classes.root}>
      <li className={classes.item}>
        <div className={classes.itemIcon}>
          <MaterialIcon />
        </div>
        <div className={classes.itemInfo}>
          <p>{t('product.common.material')}</p>
          <span>{t(`product.common.${material}`)}</span>
        </div>
      </li>
      <li className={classes.item}>
        <div className={classes.itemIcon}>
          <ColorIcon />
        </div>
        <div className={classes.itemInfo}>
          <p>{t('product.common.color')}</p>
          <span>{color}</span>
        </div>
      </li>
      <li className={classes.item}>
        <div className={classes.itemIcon}>
          <GenderIcon />
        </div>
        <div className={classes.itemInfo}>
          <p>{t('product.common.type')}</p>
          <span>{type}</span>
        </div>
      </li>
      <li className={classes.item}>
        <div className={classes.itemIcon}>
          <CategoryIcon />
        </div>
        <div className={classes.itemInfo}>
          <p>{t('product.common.category')}</p>
          <span>{category}</span>
        </div>
      </li>
    </ul>
  )
}

export default Features
