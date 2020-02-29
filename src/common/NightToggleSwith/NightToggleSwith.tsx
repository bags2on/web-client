import React from 'react'
import classes from './toggle.module.scss'

const NightToggleSwith: React.FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.toggle}>
        <input className={classes.toggleInput} type="checkbox" />
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
