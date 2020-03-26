DROP TABLE IF EXISTS simulation_users;
DROP TABLE IF EXISTS simulation_posts;

CREATE TABLE simulation_users
(
  user_id SERIAL PRIMARY KEY,
  usesrname VARCHAR(20) UNIQUE NOT NULL,
  password TEXT UNIQUE NOT NULL
);

CREATE TABLE simulation_posts
(
  post_id SERIAL PRIMARY KEY
);