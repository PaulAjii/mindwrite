import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className='post-details'>
      <Link to={`/posts/${ post._id }`}>
        <span className="title">{ post.title }</span>
        <span className="body">{ post.body }</span>
        <small className="date">
          { formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }) }
        </small>
      </Link>
    </div>
  )
}

export default Post