import React,  { useEffect } from 'react'
import { navigate } from '@store'

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 3000)
  }, [])

  return (
    <div>
      <h1>HOME</h1>
      <a href="/login">GO TO LOGIN</a>
    </div>
  )
}

export default Home