import React from 'react'
import { SharedMutations } from '@/apollo/cache/mutations'
import { isAuthenticatedVar } from '@/apollo/cache/variables'
import { useReactiveVar } from '@apollo/client'

import styles from './SignupPromo.module.scss'

const SignupPromo: React.FC = () => {
  const isAuthenticated = useReactiveVar(isAuthenticatedVar)

  if (isAuthenticated) return null

  const handleClick = () => {
    SharedMutations.checkAuthentication()
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.top}>
        <span>-15%</span>
      </div>
      <div className={styles.bottom}>
        <p>Приветственный бонус</p>
        <p>на первую покупку</p>
      </div>
    </div>
  )
}

export default SignupPromo
