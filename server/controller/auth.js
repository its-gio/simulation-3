const bcrypt = require('bcryptjs');

async function register(req, res) {
  const { username, password } = req.body;
  const db = req.app.get('db');

  const resUsers = await db.user.get_user(username).catch(err => console.error(err));
  if (resUsers.length !== 0) return res.status(406).json('Username Taken');

  const hash = bcrypt.hashSync(password, 12);
  const registeredUser = await db.user.register(username, hash);

  const user = registeredUser[0];
  req.session.user = { username: user.username }

  return res.status(201).json(req.session.user);
}

module.exports = {
  register
}