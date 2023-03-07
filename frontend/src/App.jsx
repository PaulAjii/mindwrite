import { useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import NavigationBar from "./components/NavigationBar"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PostPage from './pages/PostPage'
import Signup from './pages/Signup'
import RandomPosts from './pages/RandomPosts'

const App = () => {
  const [ darkMode, setDarkMode ] = useState(false)
  const appDiv = useRef()
  const { user } = useAuthContext()

  const onHandleToggle = () => {
    setDarkMode(() => !darkMode)
    
    darkMode
      ? appDiv.current.classList.add('darkMode')
      : appDiv.current.classList.remove('darkMode')
  }

  return(
    <div className="app-container" ref={ appDiv }>
      <BrowserRouter>
        <NavigationBar onHandleToggle={ onHandleToggle } />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={ <Home /> }
            />

            <Route 
              path='/about-us'
              element={ <About /> }
            />

            <Route 
              path='/contact-us'
              element={ user ? <Contact /> : <Navigate to='/signup' /> }
            />

            <Route 
              path='/posts/:id'
              element={ <PostPage /> }
            />

            <Route 
              path='/posts'
              element={ user ? <RandomPosts /> : <Navigate to='/signup' />}
            />

            <Route 
              path='/signup'
              element={ <Signup /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App