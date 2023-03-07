import { Link } from 'react-router-dom'

const NavigationBar = ({ onHandleToggle }) => {
  return (
    <header>
      <div className="container">
        <Link to='/' className="logo">
          Mind<span>Write</span>
        </Link>

        <nav className="nav">
          <div className="nav-links">
            <Link to="/about-us" className="nav-link">know us</Link>
            <Link to="/posts" className="nav-link">read stories</Link>
            <Link to="/contact-us" className="nav-link">reach us</Link>
            <Link to="#" className="nav-link">get started</Link>
          </div>
          <div className="toggle-mode">
            <button className='btn' onClick={ onHandleToggle }>toggle</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar