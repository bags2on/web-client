import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    padding: '15px 20px 5px 20px',
    listStyle: 'none',
    borderRadius: 10,
    boxShadow: '0px 1px 9px -1px rgba(0, 0, 0, 0.1)',
    fontWeight: 500
  },
  listItem: {
    flexBasis: '50%',
    fontSize: 17,
    marginBottom: 17,
    textAlign: 'center',
    '& p': {
      color: '#939191',
      margin: 0,
      userSelect: 'none'
    },
    '& span': {
      fontSize: 15
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'start'
    },
    [theme.breakpoints.up('laptop')]: {
      flexBasis: '25%'
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

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <p>Материал</p>
          <span>{material}</span>
        </li>
        <li className={classes.listItem}>
          <p>Цвет</p>
          <span>{color}</span>
        </li>
        <li className={classes.listItem}>
          <p>Тип</p>
          <span>{type}</span>
        </li>
        <li className={classes.listItem}>
          <p>Категория</p>
          <span>{category}</span>
        </li>
      </ul>
    </div>
  )
}

export default Features
