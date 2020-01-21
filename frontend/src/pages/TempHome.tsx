import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ScaleLoader from '../common/loaders/ScaleLoader'
import Button from '../common/Button'
import { makeStyles } from '@material-ui/core'

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
  const { t, i18n } = useTranslation()
  const [loading, setLoading] = useState(false)

  const classes = useStyles()

  const handleClick = () => {
    setLoading(!loading)
  }

  const handleChangeI18n = (lang: any) => {
    i18n.changeLanguage(lang)
  }

  return (
    <main
      style={{
        marginLeft: 30
      }}
    >
      <h1 style={{ color: '#fff' }}>{t('ts')}</h1>
      <div className={classes.locWrapper}>
        <button onClick={() => handleChangeI18n('en')}>en</button>
        <button onClick={() => handleChangeI18n('ru')}>ru</button>
      </div>
      <ScaleLoader />
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
