import React from 'react'
import classes from './toggle.module.scss'

interface NightToggleSwithProps {
  themeChanger(checked: boolean): void
}

const NightToggleSwith: React.FC<NightToggleSwithProps> = ({ themeChanger }) => {
  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checked: boolean = event.target.checked

    themeChanger(checked)
  }

  const defaultTheme = localStorage.getItem('theme')

  return (
    <div className={classes.root}>
      <div className={classes.toggle}>
        <input
          onChange={handleSwitch}
          checked={defaultTheme === 'light'}
          autoComplete="off"
          className={classes.toggleInput}
          type="checkbox"
        />
        <div className={classes.toggleBg} />
        <div className={classes.toggleSwitch}>
          <div className={classes.cloud} />
          <div className={classes.figure} />
        </div>
      </div>
    </div>
  )
}

export default NightToggleSwith
