import React, { useEffect } from 'react'
import Joi from 'joi'

import styles from './Login.module.css'

import {
  useApi,
  useForm
} from '@hooks'

import {
  Input,
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

  return (
    <div className={styles.login}>
      <div>
        <Input
          value={form.values.username}
          onChange={form.onChange('username')}
          name="username"
          placeholder="usuario"
          label="Nombre de usuario"
          type="text"
          required
        />
        <Input
          value={form.values.password}
          onChange={form.onChange('password')}
          name="password"
          placeholder=""
          label="Contraseña"
          type="password"
          required
        />
      </div>
    </div>
  )
}

export default Login