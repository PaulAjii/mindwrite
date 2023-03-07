import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { PostsContextProvider } from './contexts/PostContext'
import { AuthContextProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
