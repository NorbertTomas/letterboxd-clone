DROP TABLE IF EXISTS film_ratings;
DROP TABLE IF EXISTS follows;
DROP TABLE IF EXISTS film;
DROP TABLE IF EXISTS users;

-- Users table
CREATE TABLE users (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50) NOT NULL UNIQUE
);

-- Follows table 
CREATE TABLE follows (
    follower_id BIGINT NOT NULL,
    following_id BIGINT NOT NULL,
    followed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, following_id),
    FOREIGN KEY (follower_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (following_id) REFERENCES users(id) ON DELETE CASCADE,
    CHECK (follower_id <> following_id)
);

-- Film table 
CREATE TABLE film (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    year INT CHECK (year > 1800 AND year <= EXTRACT(YEAR FROM CURRENT_DATE)),
    director VARCHAR(255),
    genre TEXT[],
    durationMinutes INT CHECK (durationMinutes > 0),
    rating DECIMAL(2, 1) CHECK (rating >= 0 AND rating <= 10),
    image VARCHAR(255)
);

-- Film Ratings table
CREATE TABLE film_ratings (
    user_id BIGINT NOT NULL,
    film_id BIGINT NOT NULL,
    rating DECIMAL(2, 1) CHECK (rating >= 0 AND rating <= 10),
    rated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, film_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (film_id) REFERENCES film(id) ON DELETE CASCADE
);