import React, { useState } from 'react'
import ScaleLoader from '../common/loaders/ScaleLoader'
import Button from '../common/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  hiButton: {
    margin: 10,
    maxWidth: 250
  }
}))

const TempHome: React.FC = () => {
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
      <h1 style={{ color: '#fff' }}>TypeScript</h1>
      <ScaleLoader />
      <div className={classes.hiButton}>
        <Button loading={loading} color="main" fullWidth onClick={handleClick}>
          Hello
        </Button>
      </div>
      <div className={classes.hiButton}>
        <Button loading={!loading} color="main" fullWidth onClick={handleClick}>
          TypeScript
        </Button>
      </div>
    </main>
  )
}

export default TempHome
