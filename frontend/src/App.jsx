import { useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import NavigationBar from "./components/NavigationBar"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PostPage from './pages/PostPage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import RandomPosts from './pages/RandomPosts'

const App = () => {
  const [ darkMode, setDarkMode ] = useState(false)
  const appDiv = useRef()
  const { user } = useAuthContext()

  const handleToggle = () => {
    // localStorage.setItem('darkMode', !darkMode)
    setDarkMode(!darkMode)
  }


  return(
    <div className={darkMode ? 'app-container darkMode' : 'app-container'} ref={ appDiv }>
      <BrowserRouter>
        <NavigationBar handleToggle={ handleToggle } />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={ user ? <Home /> : <Navigate to='/login' /> }
            />

            <Route 
              path='/about-us'
              element={ <About /> }
            />

            <Route 
              path='/contact-us'
              element={ user ? <Contact /> : <Navigate to='/login' /> }
            />

            <Route 
              path='/posts/:id'
              element={ user ? <PostPage /> : <Navigate to='/login' /> }
            />

            <Route 
              path='/posts'
              element={ user ? <RandomPosts /> : <Navigate to='/login' />}
            />

            <Route 
              path='/signup'
              element={ <Signup /> }
            />

            <Route 
              path='/login'
              element={ <Login /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App