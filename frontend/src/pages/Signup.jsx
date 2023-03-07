import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { signup, isLoading, error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)

    await signup(email, password)
  }

  return (
    <section className="signup">
      <div className="container">
        <h3 className='title'>Join our community of writers</h3>

        <form className="signup-form" onSubmit={ handleSubmit }>
          <h4 className='title signup-title'>Sign Up</h4>
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
              className='btn signup-btn'
              type='submit'
            >
              Sign Up
            </button>
            { error && <div className='error'>{ error }</div>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup