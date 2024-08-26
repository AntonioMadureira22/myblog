const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const authMiddleware = require('../middleware/auth');

// Create a new post (Protected Route)
router.post('/', authMiddleware, async (req, res) => {
    try {
      const { title, content } = req.body;
      const newPost = new Post({ title, content, author: req.user.id });
      await newPost.save();
      res.status(201).send('Post created');
    } catch (err) {
      res.status(400).send('Error creating post');
    }
  });

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author');
    res.json(posts);
  } catch (err) {
    res.status(500).send('Error retrieving posts');
  }
});

module.exports = router;
