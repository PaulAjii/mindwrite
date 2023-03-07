import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const usePostsContext = () => {
  const context = useContext(PostContext)

  if(!context) {
    throw Error('usePostsContext must be used inside PostsContextProvider')
  }

  return context
}