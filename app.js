const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/post');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageController');

const app = express();
//connect DB

mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db', {});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//ROUTES

app.get('/', postController.getAllPosts);

app.get('/posts/:id', postController.getPost);

app.post('/posts', postController.createPost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/post', pageController.getPostPage);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
