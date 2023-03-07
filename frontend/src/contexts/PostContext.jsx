import { createContext, useReducer } from "react";

export const PostContext = createContext()

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        posts: action.payload
      }

    case 'GET_POST':
      return {
        posts: state.posts.filter(post => post._id === action.payload._id)
      }

    case 'CREATE_POST':
      return {
        posts: [action.payload, ...state.posts]
      }

    case 'DELETE_POST':
      return {
        posts: state.posts.filter(post => post._id !== action.payload._id)
      }

    default:
      return state
  }
}

export const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: null
  })

  return (
    <PostContext.Provider value={{ ...state, dispatch }}>
      { children }
    </PostContext.Provider>
  )
}