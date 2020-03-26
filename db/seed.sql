DROP TABLE IF EXISTS simulation_posts;
DROP TABLE IF EXISTS simulation_users;

CREATE TABLE simulation_users
(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE NOT NULL,
  password TEXT UNIQUE NOT NULL,
  profile_pic TEXT
);

CREATE TABLE simulation_posts
(
  post_id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES simulation_users(user_id),
  title VARCHAR(45),
  img TEXT,
  content TEXT
);