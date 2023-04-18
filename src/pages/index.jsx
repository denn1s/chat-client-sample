import { useStoreon } from 'storeon/react'
import { default as Login } from './Login/Login'
import { default as Home } from './Home/Home'
import { routerKey } from '@storeon/router'



const Page = () =>{
  const { [routerKey]: route } = useStoreon(routerKey)

  let Component = null
  switch (route.match.page) {
    case 'home':
      Component = <Home />
      break
    case 'login':
      Component = <Login />
      break
    default:
      Component = <h1>404</h1>
  }

  return (
    <main>
      {Component}
    </main>
  )
}

export default Page
