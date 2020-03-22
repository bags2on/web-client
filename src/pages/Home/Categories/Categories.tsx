import React from 'react'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'

import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { ReactComponent as TestIcon } from '../../../assets/svg/baggage.svg'

import { makeStyles } from '@material-ui/core'

const categoriesValues: any[] = [
  {
    icon: TestIcon,
    text: 'Suitcase'
  },
  {
    icon: TestIcon,
    text: 'Suitcase'
  },
  {
    icon: TestIcon,
    text: 'Suitcase'
  },
  {
    icon: TestIcon,
    text: 'Suitcase'
  },
  {
    icon: TestIcon,
    text: 'Suitcase'
  }
]

const useStyles = makeStyles(theme => ({
  root: {
    padding: '3px 5px 10px 5px',
    marginBottom: '15px',
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0
    }
  },
  title: {
    fontSize: '26px',
    fontWeight: 600,
    marginLeft: '10px',
    marginBottom: '15px'
  },
  item: {
    margin: '0 5px',
    flexBasis: '20%',
    textAlign: 'center'
  },
  icon: {
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    marginBottom: '6px',
    boxShadow: '0 2px 10px -1px rgba(0, 0, 0, 0.15)',
    '-webkit-tap-highlight-color': 'transparent',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none'
  },
  text: {
    fontSize: '14px'
  }
}))

const Categories: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Typography className={classes.title} component="h2">
        Categories
      </Typography>
      <div>
        <ul>
          {categoriesValues.map((category, ind) => (
            <li key={ind} className={classes.item}>
              <div className={classes.icon}>
                <Link to="#">
                  <IconButton aria-label={category.text}>
                    <Icon>
                      <category.icon />
                    </Icon>
                  </IconButton>
                </Link>
              </div>
              <Typography component="span">{category.text}</Typography>
            </li>
          ))}
          {/* <li className={classes.item}>
            <Link to="#">
              <div className={classes.icon}>
                <IconButton>
                  <Icon>
                    <TestIcon />
                  </Icon>
                </IconButton>
              </div>
            </Link>
            <Typography component="span">Text</Typography>
          </li> */}
        </ul>
      </div>
    </section>
  )
}

export default Categories
