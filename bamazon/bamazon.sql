CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE product(
	 item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
     product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
     price DECIMAL(8, 2) NULL,
     stock_quantity INTEGER(50) NULL,
     PRIMARY KEY (item_id)
    );

INSERT INTO product (product_name, department_name, price, stock_quantity)
VALUES 
	("Pencil", "School Supplies", 2.99, 84),
    
	("Paper", "School Supplies", 1.99, 220),
    
	("Bread", "Food", 4.85, 64),
    
	("Pasta", "Food", 8.24, 42),
	 
	("Computer", "Electronics", 985.29, 8),
			
	("HDMI Cable", "Electronics", 42.76, 6),
			
	("Blue Paint", "Paint", 82.44, 12),
			
	("Green Paint", "Paint", 80.10, 4),

	("Calculator", "School", 56.64, 22),
			 
	("Protractor", "School", 12.24, 2);

SELECT * FROM product