import React from 'react'
import SignUpPatternImg from '../../assets/rastr/signup-promo-pattern.jpg'
import { SharedMutations } from '../../apollo/cache/mutations'
import { isAuthenticatedVar } from '../../apollo/cache/cache'
import { useReactiveVar } from '@apollo/client'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    cursor: 'pointer',
    marginTop: 15,
    userSelect: 'none',
    padding: '7px 15px',
    backgroundImage: `url(${SignUpPatternImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 600
  },

  firstBox: {
    fontSize: 'max(1em, min(4em, calc(var(--base-scale) * 6)))',
    marginRight: 15
  },
  secondBox: {
    fontSize: 'max(1em, min(1.4em, calc(var(--base-scale) * 3)))',
    margin: 0,
    '& > p': {
      margin: 0
    }
  }
}))

const SignupPromo: React.FC = () => {
  const classes = useStyles()
  const isAuthenticated = useReactiveVar(isAuthenticatedVar)

  if (isAuthenticated) return null

  const handleClick = () => {
    SharedMutations.checkAuthentication()
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.firstBox}>
        <span>-15%</span>
      </div>
      <div className={classes.secondBox}>
        <p>приветственный бонус</p>
        <p>на первую покупку</p>
      </div>
    </div>
  )
}

export default SignupPromo
