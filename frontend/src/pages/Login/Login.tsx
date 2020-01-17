import React from 'react'
import Button from '../../common/Button'
import TextInput from '../../common/TextInput'

const Login: React.FC = () => {
  return (
    <div
      style={{
        margin: 20
      }}
    >
      <div style={{ marginBottom: 100 }}>
        <TextInput placeholder="Hello" />
      </div>
      <Button color="main" fullWidth>
        Hello
      </Button>
    </div>
  )
}

export default Login
