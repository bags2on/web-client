import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { useLang } from '../../hooks'

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
  const classes = useStyles()
  const [currentLang, changeLang] = useLang()

  return (
    <div className={classes.root}>
      {langs.map((lang) => (
        <span
          key={lang}
          className={clsx({
            [classes.lang]: true,
            [classes.activeLang]: lang === currentLang
          })}
          onClick={(): void => changeLang(lang)}
        >
          {lang}
        </span>
      ))}
    </div>
  )
}

export default LangSwitcher
