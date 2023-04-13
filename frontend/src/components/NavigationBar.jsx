import { Link } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

const NavigationBar = ({ handleToggle }) => {
  const { user } = useAuthContext()

  return (
    <header>
      <div className="container">
        <Link to='/' className="logo">
          Mind<span>Write</span>
        </Link>

        <nav className="nav">
          {
            user 
              ?
              <div className="nav-links">
              <Link to="/about-us" className="nav-link">know us</Link>
              <Link to="/posts" className="nav-link">read stories</Link>
              <Link to="/login" className="nav-link">sign in</Link>
              <Link to="/contact-us" className="nav-link">sign out</Link>
              <Link to="/signup" className="nav-link">dashboard</Link>
            </div>
              :
            <div className="nav-links">
              <Link to="/about-us" className="nav-link">know us</Link>
              <Link to="/posts" className="nav-link">read stories</Link>
              <Link to="/contact-us" className="nav-link">reach us</Link>
              <Link to="/login" className="nav-link">sign in</Link>
              <Link to="/signup" className="nav-link">get started</Link>
            </div>
          }
          
          <div className="toggle-mode">
            <button className='btn' onClick={ handleToggle }>toggle</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar