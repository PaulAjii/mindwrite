import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePostsContext } from '../hooks/usePostsContext'

const PostPage = () => {
  const { posts, dispatch } = usePostsContext()
  const params = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/api/v1/posts/${ params.id }`)

      const jsonData = await response.json()

      if(response.ok) {
        dispatch({ type: 'GET_POST', payload: jsonData })
      }
    }

    fetchData()
  }, [dispatch])
  return (
    <section className="post-page">
      <div className="container">
        <h2 className="title">{ posts[0].title }</h2>
        <p className="body">{ posts[0].body }</p>
      </div>
    </section>
  )
}

export default PostPage