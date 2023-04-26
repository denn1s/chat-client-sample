import React, { useEffect } from 'react'
// import { useStoreon } from 'storeon/react'
import {
  useApi,
  useForm
} from '@hooks'

import Loading from './Loading'

const Login = () => {
  const { loading, data, handleRequest } = useApi()

  const getHello = () => handleRequest('GET', '/hello')

  useEffect(() => {
    getHello()
  }, [])

  const world = data?.hello

  return (
    <div>
      {
        loading ?
          <Loading />:
          <h1>
            Response: {world}
          </h1>
      }
    </div>
  )
}

export default Login