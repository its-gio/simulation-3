SELECT p.title, p.img, p.content, u.username
FROM simulation_posts p
  JOIN simulation_users u
  ON u.user_id = p.author_id;