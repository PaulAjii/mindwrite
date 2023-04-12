import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
  const [ error, setError ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(null)

  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)
    
    const response = await fetch('http://localhost:5000/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const jsonData = await response.json()

    if(!response.ok) {
      setIsLoading(false)
      setError(jsonData.error)
    }

    if(response.ok) {
      localStorage.setItem('user', JSON.stringify(jsonData))
      dispatch({ type: 'LOGIN_USER', payload: jsonData })
      setIsLoading(false)
    }
  }

  return { login, error, isLoading }
}