
const Post = require("../models/post")


exports.getAllPosts = async (req, res) => {
  const page = req.query.page || 1 ;
  const postPerPage = 2;
  const totalPosts =  await Post.find().countDocuments();
  
  const posts = await Post.find({})
  .sort('-dateCreated')
  .skip((page-1) *postPerPage)
  .limit(postPerPage)
  console.log(posts);
    res.render('index',{
      posts : posts,
      current : page,
      pages : Math.ceil(totalPosts/postPerPage)
    });
  
  }

exports.getPost = async (req, res) => {

  const post =  await Post.findById(req.params.id);
  res.render('post',{
    post
  })
}
exports.createPost = async (req, res) => {
  await Post.create(req.body)
  res.redirect('/');
 
 }