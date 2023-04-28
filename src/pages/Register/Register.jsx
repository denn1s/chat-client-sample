import React, { useState } from 'react'
import Joi from 'joi'

import { navigate } from '@store'

import styles from './Register.module.css'

import {
  useApi,
  useForm
} from '@hooks'

import {
  Input,
  Eye,
  Button,
  Notification,
} from '@components'

const schema = Joi.object({
  username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  password2: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

const Register = () => {
  const [showPassword, setShowPassword] = useState([false, false])
  const { loading, handleRequest } = useApi()
  const form = useForm(schema, { username: '', password: '', password2: ''})

  const postRegister = async (username, password) => {
    const response = await handleRequest('POST', '/register', {
      username,
      password
    })
    console.log('response', response)
    if (response?.success) {
      navigate('/login')
    }
  }

  const handleRegister = () => {
    console.log('handle register')
    if (form.validate()) {
      postRegister(form.values.username, form.values.password)
    }
  }

  return (
    <div className={styles.register}>
      <h1>Nuevo Usuario</h1>
      <div>
        <Input
          value={form.values.username}
          onChange={form.onChange('username')}
          name="username"
          label="Username"
          type="text"
          required
        />
        <aside>
          <Input
            value={form.values.password}
            onChange={form.onChange('password')}
            name="password"
            placeholder=""
            label="Password"
            type={showPassword[0] ? 'text' : 'password'}
            required
          />
          <Eye
            open={showPassword[0]}
            onToggle={(newShowPassword) => 
              setShowPassword([
                newShowPassword,
                showPassword[1]
              ])}
          />
        </aside>
        <aside>
          <Input
            value={form.values.password2}
            onChange={form.onChange('password2')}
            name="password2"
            placeholder=""
            label="Password Again"
            type={showPassword[1] ? 'text' : 'password'}
            required
          />
          <Eye
            open={showPassword[1]}
            onToggle={(newShowPassword) => 
              setShowPassword([
                showPassword[0],
                newShowPassword,
              ])}
          />
        </aside>

        {
          form.error ? (
            <Notification type="danger">
              {form.error}
            </Notification>
          ) : null
        }

        {
          form.values.password !== form.values.password2
          && form.values.password2 !== '' ? (
            <Notification type="warning" dismissable>
              Passwords do not match
            </Notification>
          ) : null
        }

        <Button
          type="primary"
          onClick={handleRegister}
          disabled={
            !form.values.username
            || !form.values.password
            || !form.values.password2
          }
          loading={loading}
        >
          Registrarme
        </Button>
      </div>
    </div>
  )
}

export default Register