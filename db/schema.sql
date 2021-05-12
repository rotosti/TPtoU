DROP DATABASE IF EXISTS tp_db;
CREATE DATABASE tp_db;
USE :tp_db;


INSERT INTO Subtier (tier_name,description,price)
VALUES ("Standard", "Standard includes our standard package of soft toilet paper","$20") ;

INSERT INTO Subtier (tier_name,description,price)
VALUES ("Deluxe", "Deluxe includes our Deluxe package of soft toilet paper","$30") ;

INSERT INTO Subtier (tier_name,description,price)
VALUES ("Premium", "Premium includes our premium package of our highest quality and highest ply of toilet paper","$40") ;


INSERT INTO Product (name,quantity,image)
VALUES ("Standard one", "12 rolls","/image/tp-placeholder.jpeg");

INSERT INTO Product (name,quantity,image)
VALUES ("Delux Tp", "16 rolls","/image/tp-placeholder.jpeg");

INSERT INTO Product (name,quantity,image)
VALUES ("Kings Tp", "20 rolls","/image/tp-placeholder.jpeg");


