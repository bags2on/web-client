import React from 'react'
import history from '../../utils/history'
import routes from '../../utils/routes'
import Button from '../../shared/Button/Button'
import NotFoundImage from '../../assets/svg/404.svg'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100 * var(--vh))'
  },
  container: {
    width: '100%',
    maxWidth: 500
  },
  title: {
    margin: 0,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    maxWidth: 500,
    '& img': {
      width: '100%'
    }
  },
  actionButton: {
    display: 'block',
    maxWidth: 150,
    margin: '0 auto',
    marginTop: 20
  }
}))

const NoMatchPage: React.FC = () => {
  const classes = useStyles()

  const handleButtonClick = () => {
    history.push(routes.root)
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={NotFoundImage} alt="Страница не найдена (изображение)" />
        </div>
        <h1 className={classes.title}>Страница не найдена</h1>
        <Button color="secondary" fullWidth className={classes.actionButton} onClick={handleButtonClick}>
          На главную
        </Button>
      </div>
    </div>
  )
}

export default NoMatchPage
