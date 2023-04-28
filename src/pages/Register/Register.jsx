import React, { useState } from 'react'
import Joi from 'joi'

import styles from './Register.module.css'

import {
  useApi,
  useForm
} from '@hooks'

import {
  Input,
  Eye,
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

const Login = () => {
  const [showPassword, setShowPassword] = useState([false, false])
  const { loading, data, handleRequest } = useApi()
  const form = useForm(schema, { username: '', password: '', password2: ''})

  return (
    <div className={styles.register}>
      <h1>Nuevo Usuario</h1>
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
        <aside>
          <Input
            value={form.values.password}
            onChange={form.onChange('password')}
            name="password"
            placeholder=""
            label="Contraseña"
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
            label="Contraseña"
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
      </div>
    </div>
  )
}

export default Login