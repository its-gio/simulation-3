INSERT INTO simulation_posts
  (author_id, title, img, content)
VALUES
  ($1, $2, $3, $4)
RETURNING *;