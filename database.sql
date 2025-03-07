-- Create the database
CREATE DATABASE IF NOT EXISTS movie_db;
USE movie_db;

-- Create the movies table
CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    mainActors TEXT NOT NULL,
    genre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- Insert sample data (optional)
INSERT INTO movies (title, year, mainActors, genre, description)
VALUES 
('Dune', 2021, 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac', 'Sci-Fi, Adventure', 'A young nobleman becomes embroiled in a war for control of the\most valuable asset of the galaxy, the spice melange.'),
('Interstellar', 2014, 'Matthew McConaughey, Anne Hathaway, Jessica Chastain', 'Sci-Fi, Drama', 'A team of explorers travels through a wormhole in space to ensure the\survival of humanity.');