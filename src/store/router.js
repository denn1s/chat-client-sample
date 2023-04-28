import { createRouter } from '@storeon/router'

export default createRouter([
  ['/', () => ({ page: 'home' })],
  ['/login', () => ({ page: 'login' })],
  ['/register', () => ({ page: 'register' })],
])