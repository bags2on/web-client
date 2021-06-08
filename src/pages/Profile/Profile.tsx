import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {}
}))

const Profile: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
