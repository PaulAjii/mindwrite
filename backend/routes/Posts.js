const router = require('express').Router()

const {
    createPost,
    getPosts,
    getOnePost,
    deletePost,
    updatePost
  } = require('../controllers/Posts')

router.route('/').get(getPosts).post(createPost)
router.route('/:id').get(getOnePost).delete(deletePost).patch(updatePost)

module.exports = router