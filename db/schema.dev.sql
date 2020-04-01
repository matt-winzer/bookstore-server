DROP DATABASE IF EXISTS bookstore_db;

CREATE DATABASE bookstore_db;

USE bookstore_db;

CREATE TABLE book (
  id SERIAL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  price FLOAT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE author (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  bio VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE book_author (
  id SERIAL PRIMARY KEY,
  book_id BIGINT UNSIGNED NOT NULL,
  author_id BIGINT UNSIGNED NOT NULL,
  CONSTRAINT FOREIGN KEY (book_id)
    REFERENCES book(id)
    ON DELETE CASCADE,
  CONSTRAINT FOREIGN KEY (author_id)
    REFERENCES author(id)
    ON DELETE CASCADE
);

CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL
);

-- shopping cart table: join table between books and users

CREATE TABLE user_book (
  id SERIAL PRIMARY KEY,
  book_id BIGINT UNSIGNED NOT NULL,
  user_id BIGINT UNSIGNED NOT NULL,
  CONSTRAINT FOREIGN KEY (book_id)
    REFERENCES book(id)
    ON DELETE CASCADE,
  CONSTRAINT FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE CASCADE
);

-- seed data

INSERT INTO book (title, description, price)
VALUES 
('The Name of the Wind', "Activated charcoal palo santo beard knausgaard ennui succulents craft beer copper mug ugh helvetica deep v keytar sartorial cliche pour-over. Gastropub pug seitan, air plant wayfarers hexagon cred synth adaptogen plaid normcore leggings locavore. You probably haven't heard of them farm- to - table actually fashion axe viral stumptown unicorn tilde, banh mi locavore skateboard tumblr paleo pork belly.Raw denim marfa la croix, tumeric health goth poke celiac man braid + 1 3 wolf moon pok pok godard.Shabby chic four dollar toast organic fixie pickled bitters af.", 12.99),
('Dune', "Bespoke selvage keytar, tacos waistcoat literally kinfolk brunch green juice. Typewriter sriracha four loko, chicharrones cloud bread kogi swag. Keytar offal single-origin coffee normcore, forage af tofu kitsch mumblecore shabby chic iPhone unicorn put a bird on it trust fund post-ironic. Fixie cronut brunch man bun, air plant post-ironic gentrify chia seitan narwhal VHS tbh meh hexagon chicharrones. Plaid marfa blog hashtag tumblr artisan occupy post-ironic af, wayfarers banh mi brooklyn drinking vinegar edison bulb migas. Pork belly thundercats hot chicken palo santo cornhole mustache ethical iPhone wolf.", 14.99),
("Howl's Moving Castle", "Jean shorts 3 wolf moon typewriter 90's tilde banh mi authentic. Cardigan quinoa 8-bit pok pok. Artisan meh offal iPhone tattooed tote bag craft beer food truck tumeric pour-over edison bulb pork belly umami succulents freegan. Austin normcore DIY irony vice pop-up microdosing viral jianbing YOLO raw denim kinfolk kogi cliche. Biodiesel swag sartorial paleo shoreditch succulents man bun.", 9.99);

INSERT INTO author (name, bio)
VALUES
('Patrick Rothfuss', 'I write good books.'),
('Frank Herbert', 'I write real good books.'),
('Diane Jones', 'I write the best books.');

INSERT INTO book_author (book_id, author_id)
VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3);

INSERT INTO user (email)
VALUES
('matt@test.com');