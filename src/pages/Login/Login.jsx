import React, { useEffect } from 'react'
import Joi from 'joi'

import styles from './Login.module.css'

import {
  navigate
} from '@store'

import {
  useApi,
  useForm
} from '@hooks'

import {
  Input,
  Button,
  Notification
} from '@components'

const schema = Joi.object({
  username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

const Login = () => {
  const { loading, data, handleRequest } = useApi()
  const form = useForm(schema, { username: '', password: ''})

  const postLogin = async (username, password) => {
    const response = await handleRequest('POST', '/login', {
      username,
      password
    })
    if (response.success) {
      navigate('/')
    }
  }

  const handleLogin = () => {
    console.log('handle login')
    if (form.validate()) {
      postLogin(form.values.username, form.values.password)
    }
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <div>
        <Input
          value={form.values.username}
          onChange={form.onChange('username')}
          name="username"
          label="Username"
          type="text"
          required
        />
        <Input
          value={form.values.password}
          onChange={form.onChange('password')}
          name="password"
          placeholder=""
          label="Password"
          type="password"
          required
        />

        {
          !data || data.success ?
            null :
            <Notification type="danger">
              Username or password are incorrect
            </Notification>
        }

        {
          form.error ?
            <Notification type="warning">
              The username or password you entered is not valid
            </Notification> : null
        }

        <Button
          type="primary"
          onClick={handleLogin}
          disabled={
            !form.values.username
            || !form.values.password
          }
          loading={loading}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login