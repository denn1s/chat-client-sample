import { useState, useEffect } from 'react'

const apiUrl = 'http://127.0.0.1:5000'

const useApi = () => {
  const [ data, setData ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const handleRequest = async (method, path, body = {}, headers = {}) => {
    const options = {
      method,
      headers
    }

    if (method !== 'GET') {
      options.body = JSON.stringify(body)
    }

    setLoading(true)
    try {
      console.info('API CALL', method, path)

      const fetchResponse = await fetch(`${apiUrl}${path}`, options)
      const jsonResponse = await fetchResponse.json()

      console.info('API RESPONSE', jsonResponse)

      setData(jsonResponse)
    } catch (e) {
      console.error('Error in api call', e)
      setData({
        error: true,
        message: e.message,
      })
    }
    setLoading(false)
  }
 
  return {
    loading,
    handleRequest,
    data
  }
}

export default useApi