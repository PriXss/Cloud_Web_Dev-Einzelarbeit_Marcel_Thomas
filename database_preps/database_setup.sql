CREATE DATABASE IF NOT EXISTS productinformation;
USE productinformation;

CREATE TABLE IF NOT EXISTS products  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    filename VARCHAR(255)
);

INSERT INTO products (name, description, price, filename) VALUES
('Sport Bobbycar', 'Schneller, besser teurer, nichts fuer arme Kinder', 109.99, 'bobbycarsport.png'),
('Classic Bobbycar', 'Schneller, besser teurer, nichts fuer arme Kinder', 109.99, 'bobbycarsport.png'),
('Needy Bobbycar', 'Schneller, besser teurer, nichts fuer arme Kinder', 109.99, 'bobbycarsport.png'),
('Fantastic Bobbycar', 'Schneller, besser teurer, nichts fuer arme Kinder', 109.99, 'bobbycarsport.png'),
('Normales Bobbycar', 'Standard', 19.99, 'bobbycarnormal.png');
