import React from 'react'
import { useUserStore } from '@/store/user'

import styles from './SignupPromo.module.scss'

const SignupPromo: React.FC = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated)

  if (isAuthenticated) return null

  const handleClick = () => {
    console.log('click')
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
