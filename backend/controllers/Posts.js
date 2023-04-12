const mongoose = require('mongoose')
// const { findOneAndUpdate } = require('../model/Posts')
const Posts = require('../model/Posts')

const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find({ }).sort({ createdAt: -1 })
    res.status(200).json(posts)
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getOnePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      error: 'Invalid ID...'
    })
    return
  }

  try {
    const post = await Posts.findById(id)

    if(!post) {
      res.status(404).json({
        error: 'Post not found'
      })
      return
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const createPost = async(req, res) => {
  const { title, body } = req.body
  if(!title || !body) {
    res.status(400).json({
      error: 'All fields are required...'
    })
    return
  }

  try {
    const user_id = req.user[0]._id
    const post = await Posts.create({ title, body, user_id })
    res.status(201).json(post)
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const deletePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      error: 'Invalid ID...'
    })
    return
  }

 try {
    const post = await Posts.findByIdAndDelete(id)

    if(!post) {
      res.status(404).json({
        error: 'Post not found...'
      })
    }
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const updatePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      error: 'Invalid ID...'
    })
    return
  }

  try {
    const postUpdate = await Posts.findOneAndUpdate({ _id: id }, { ...req.body })

    if(!postUpdate) {
      res.status(404).json({
        error: error.message
      })
      return
    }
    const post = await Posts.findById(id)
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

module.exports = {
  createPost,
  getOnePost,
  getPosts,
  deletePost,
  updatePost
}