CREATE DATABASE forum;

CREATE TABLE posts(
    id int(6) AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(40),
    mensagem VARCHAR(250)
);