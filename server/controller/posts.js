async function createPost(req, res) {
  const { title, img, content } = req.body;
  const { user_id } = req.session.user;
  const db = req.app.get('db');

  if (!user_id) return res.status(401).json("Not logged in");

  try {
    await db.posts.create_post(user_id, title, img, content);
  } catch (err) {
    return res.status(500).json(err);
  }
  
  res.sendStatus(200);
}

async function getPosts(req, res) {
  const db = req.app.get('db');
  let gottenPosts;

  try{
    gottenPosts = await db.posts.get_posts();
  } catch (err) {
    return res.status(500).json(err);
  }

  res.status(200).json(gottenPosts);
}

module.exports = {
  createPost,
  getPosts
}