import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 92,
    display: 'flex',
    fontWeight: 400,
    fontSize: 18
  },
  lang: {
    color: theme.palette.type === 'light' ? '#343434' : '#fff',
    display: 'block',
    border: '1px solid #aeaeae',
    padding: '4px 8px',
    borderRadius: 8,
    fontSize: 23,
    cursor: 'pointer',
    marginLeft: '8px',
    userSelect: 'none',
    '-webkit-tap-highlight-color': 'transparent',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },
  activeLang: {
    color: `${theme.palette.secondary.main} !important`
  }
}))

const langs: string[] = ['ru', 'ua']

const LangSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const [current, setCurrent] = useState<string>('')
  const classes = useStyles()

  const langHandler = (lang: string): void => {
    i18n.changeLanguage(lang)
    setCurrent(lang)
  }

  // TODO: create your own HOOK
  const cbLangHandler = useCallback((): void => {
    langHandler('ru')
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!i18n.language) {
      cbLangHandler()
      return
    }

    setCurrent(i18n.language)
  }, [i18n.language, cbLangHandler])

  return (
    <div className={classes.root}>
      {langs.map((lang) => (
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
