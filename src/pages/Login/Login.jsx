import React, { useEffect } from 'react'
import { useStoreon } from 'storeon/react'

const Login = () => {
  const { dispatch, user } = useStoreon('user')

  useEffect(() => {
    setTimeout(() => {
      dispatch('user/login', { username: 'juanito', token: '123' })
    }, 5000)

    setTimeout(() => {
      dispatch('user/logout')
    }, 10000)
  }, [])

  return <div>
    {
      user.isLoggedIn ?
        <h1>USER IS LOGGED IN</h1>:
        <h1>USER IS NOT LOGGED IN</h1>
    }
  </div>
}

export default Login