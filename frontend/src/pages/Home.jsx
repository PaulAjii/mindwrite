import { useEffect } from "react"
import { Link } from "react-router-dom"
import { formatDistanceToNow } from 'date-fns'

import { usePostsContext } from '../hooks/usePostsContext'

import Banner from '../components/Banner'
import Post from "../components/Post"
import Footer from "../components/Footer"

const Home = () => {
  const { posts, dispatch } = usePostsContext()

  useEffect(() => {
      const fetchData = async () => {
      const response = await fetch('https://api-mindwrite.onrender.com/api/v1/posts')

      const jsonData = await response.json()
      // console.log(jsonData)

      if(response.ok) {
        dispatch({ type: 'GET_POSTS', payload: jsonData})
      }
    }

    fetchData()
  }, [dispatch])

  return (posts ?
    <>
      <Banner />
      <section>
        <div className="container home-container">
          <div className="posts">
            <h3>trending posts</h3>
            <div className="posts-wrapper">
              {
                posts && posts.map((post, index) => (
                  <div className="post-container" key={ post._id }>
                    <span>0{ index = index += 1 }</span>
                    <div className="home-post-details">
                      <Link to={`/posts/${ post._id }`}>{ post.title }</Link>
                      <p className="date">
                        { formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }) }
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="grid-container">
            <div className="infinite-posts">
              {
                posts && posts.map((post) => (
                  <Post key={ post._id } post={ post } />
                ))
              }
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
: 
<div className="loading-overlay"/>
    <p>Loading</p>
    <p>Sorry, the server is taking too long to load.</p>
</div>
  )
}

export default Home
