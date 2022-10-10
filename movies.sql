--Top 25 Movies of All Time from URL:
--https://www.imdb.com/list/ls024149810/

CREATE DATABASE greatmovies;
USE greatmovies;

CREATE TABLE IF NOT EXISTS top25movies (
    movie_id 	INT AUTO_INCREMENT PRIMARY KEY,
    title 		VARCHAR(150) NOT NULL,
    yearmade 	INT NOT NULL,
    runningtime	INT NOT NULL,
    category	VARCHAR(50),
	rating		VARCHAR(10));

USE greatmovies;
INSERT INTO top25movies
(title, yearmade, runningtime, category, rating) VALUES
("The Shawshank Redemption", 1994, 142, "Drama", "R"),
("The Godfather", 1972, 175, "Crime", "R"),
("Citizen Kane", 1941, 119, "Drama", "PG"),
("12 Angry Men", 1957, 96, "Crime", "N/A"),
("Schindler\'s List", 1993, 195, "Biography", "R"),
("The Good, the Bad and the Ugly", 1966, 178, "Western", "R"),
("Star Wars: Episode V - The Empire Strikes Back", 1980, 124, "Action", "PG"),
("The Lord of the Rings: The Return of the King", 2003, 201, "Action", "PG-13"),
("The Dark Knight", 2008, 152, "Action", "R"),
("The Godfather Part II", 1974, 202, "Crime", "R"),
("Pulp Fiction", 1994, 154, "Crime", "R" ),
("Fight Club", 1999, 139, "Drama", "R"),
("Psycho", 1960, 109, "Horror", "R"),
("2001: A Space Odyssey", 1968, 149, "Sci-Fi", "G"),
("Metropolis", 1927, 153, "Sci-Fi", "N/A"),
("Star Wars: Episode IV - A New Hope", 1977, 121, "Action", "PG"),
("The Lord of the Rings: The Fellowship of the Ring", 2001, 178, "Action", "PG-13"),
("Terminator 2: Judgment Day", 1991, 137, "Action", "R"),
("The Matrix", 1999, 136, "Action", "R"),
("Indiana Jones and the Raiders of the Lost Ark", 1981, 115, "Action", "PG"),
("Casablanca", 1942, 102, "Drama", "PG"),
("The Wizard of Oz", 1939, 102, "Adventure", "PG"),
("Seven Samurai", 1954, 207, "Action", "N/A"),
("Forrest Gump", 1994, 142, "Drama", "PG-13"),
("Inception", 2010, 148, "Action", "PG-13")