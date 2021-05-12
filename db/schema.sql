DROP DATABASE IF EXISTS tp_db;
CREATE DATABASE tp_db;

use tp_db;
INSERT INTO Subtier (tier_name,description,price)
VALUES ("Standard", "Standard includes our standard package of soft toilet paper",19.99) ;

INSERT INTO Subtier (tier_name,description,price)
VALUES ("Deluxe", "Deluxe includes our Deluxe package of soft toilet paper",29.99) ;

INSERT INTO Subtier (tier_name,description,price)
VALUES ("Premium", "Premium includes our premium package of our highest quality and highest ply of toilet paper",39.99) ;


INSERT INTO Product (name,quantity,tier_id,image)
VALUES ("Standard one", 12, 1, "/image/tp-placeholder.jpeg");

INSERT INTO Product (name,quantity,tier_id,image)
VALUES ("Delux Tp", 16, 2, "/image/tp-placeholder.jpeg");

INSERT INTO Product (name,quantity,tier_id,image)
VALUES ("Kings Tp", 20, 3, "/image/tp-placeholder.jpeg");


