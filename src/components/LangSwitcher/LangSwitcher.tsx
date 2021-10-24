import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'
import { useLang } from '../../hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 95,
    display: 'flex',
    justifyContent: 'space-around',
    fontWeight: 400,
    fontSize: 18,
    border: '1px solid #bfbfbf',
    borderRadius: 12,
    padding: '4px 0px',
    marginLeft: 10
  },
  lang: {
    color: theme.palette.type === 'light' ? '#343434' : '#fff',
    display: 'block',
    padding: '2px 5px 4px 5px',
    fontSize: 21,
    lineHeight: '23px',
    cursor: 'pointer',
    userSelect: 'none',
    '-webkit-tap-highlight-color': 'transparent',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none'
  },
  activeLang: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 11,
    color: '#343434'
  }
}))

const LangSwitcher: React.FC = () => {
  const classes = useStyles()
  const [currentLang, changeLang] = useLang()

  const langs = ['ru', 'ua']

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
