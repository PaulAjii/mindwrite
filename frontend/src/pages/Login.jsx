import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    setEmail("")
    setPassword("")

    await login(email, password)
  }

  return (
    <section className="login">
      <div className="container">
        <h3 className='title'>Continue from where you stopped</h3>

        <form className="login-form" onSubmit={ handleSubmit }>
          <h4 className='title login-title'>Sign In</h4>
          <div className="form-fields__container">
            <div className="form-control">
              <label>
                Email:
              </label>
              <input
                type="email"
                placeholder='e.g. example@email.com'
                required
                onChange={ (e) => setEmail(e.target.value) }
                value={ email }
              />
            </div>

            <div className="form-control">
              <label>Password:</label>
              <input
                type="password"
                placeholder='e.g. 123abc123ABC#$@'
                required
                onChange={ (e) => setPassword(e.target.value) }
                value={ password }
              />
            </div>
            <button
              disabled={ isLoading }
              className='btn login-btn'
              type='submit'
            >
              Login
            </button>
            { error && <div className='error'>{ error }</div>}
            <p className="form-text">
              Don't have an account? 
              <Link to='/signup' style={{ textDecoration: 'underline' }}> Sign up </Link>
              here.
            </p>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Login