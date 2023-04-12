const requireAuth = require('../middlewares/requireAuth')
const router = require('express').Router()

const {
    createPost,
    getPosts,
    getOnePost,
    deletePost,
    updatePost
  } = require('../controllers/Posts')

router.route('/').get(getPosts)
router.use(requireAuth)
router.post(createPost)
router.route('/:id').get(getOnePost).delete(deletePost).patch(updatePost)

module.exports = router