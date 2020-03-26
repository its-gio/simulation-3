INSERT INTO simulation_users
  (username, password)
VALUES
  ($1, $2)
RETURNING *;