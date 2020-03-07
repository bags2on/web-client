import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: 92,
    float: 'right',
    fontWeight: 'normal',
    fontSize: '18px',
    color: theme.palette.primary.main
  },
  lang: {
    cursor: 'pointer',
    marginLeft: '8px',
    '-webkit-tap-highlight-color': 'transparent',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  activeLang: {
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'none'
    }
  }
}))

const langs: string[] = ['en', 'ru', 'ua']

const LangSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const [current, setCurrent] = useState<string>(i18n.language)
  const classes = useStyles()

  const langHandler = (lang: string): void => {
    i18n.changeLanguage(lang)
    setCurrent(lang)
  }

  return (
    <div className={classes.root}>
      {langs.map(lang => (
        <span
          key={lang}
          className={clsx({
            [classes.lang]: true,
            [classes.activeLang]: lang === current
          })}
          onClick={(): void => langHandler(lang)}
        >
          {lang}
        </span>
      ))}
    </div>
  )
}

export default LangSwitcher
