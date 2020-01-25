import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ScaleLoader from '../common/loaders/ScaleLoader'
import Button from '../common/Button'
import LangSwitcher from '../components/LangSwitcher/LangSwitcher'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  hiButton: {
    margin: 10,
    maxWidth: 250
  },
  locWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 50,
    '& > button': {
      backgroundColor: 'orange',
      color: '#000',
      border: '1px #000',
      padding: '10px',
      margin: 5,
      fontWeight: 600,
      fontSize: 20,
      cursor: 'pointer'
    }
  }
}))

const TempHome: React.FC = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const classes = useStyles()

  const handleClick = () => {
    setLoading(!loading)
  }

  return (
    <main
      style={{
        marginLeft: 30
      }}
    >
      <h1 style={{ color: '#fff' }}>{t('ts')}</h1>
      <Link
        style={{
          color: 'orange',
          fontWeight: 600
        }}
        to="/login"
      >
        Login
      </Link>
      <LangSwitcher />
      <div className={classes.hiButton}>
        <Button loading={loading} color="main" fullWidth onClick={handleClick}>
          {t('send')}
        </Button>
      </div>
      <div className={classes.hiButton}>
        <Button loading={!loading} color="main" fullWidth onClick={handleClick}>
          TypeScript
        </Button>
      </div>
      <ScaleLoader fallback />
    </main>
  )
}

export default TempHome
