import React from 'react'
import Advantages from './Advantages/Advantages'
import { Link } from 'react-router-dom'
import Button from '../../common/Button'

const Home: React.FC = () => {
  return (
    <div>
      <div
        style={{
          margin: '20px 0'
        }}
      >
        <Button color="main" to="/login" component={Link} fullWidth>
          to login
        </Button>
      </div>
      <Advantages />
    </div>
  )
}

export default Home
