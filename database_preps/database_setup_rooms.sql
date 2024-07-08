CREATE DATABASE IF NOT EXISTS hotelrooms;
USE hotelrooms;

CREATE TABLE IF NOT EXISTS rooms  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    filename VARCHAR(255)
);

INSERT INTO rooms (name, description, price, filename) VALUES
('Deluxe King Room', 'Spacious room with a king-sized bed, luxurious bedding, and a panoramic view of the city skyline. Includes a modern bathroom with a rainfall shower and complimentary toiletries.', 150.00, 'deluxe_king_room.jpg'),
('Standard Queen Room', 'Cozy room with a queen-sized bed, contemporary decor, and a work desk. Ideal for business travelers or couples. Free Wi-Fi and a flat-screen TV are included.', 100.00, 'standard_queen_room.jpg'),
('Superior Twin Room', 'Comfortable room featuring two twin beds, elegant furnishings, and a seating area. Perfect for friends or small families. Includes a mini-bar and a spacious wardrobe.', 120.00, 'superior_twin_room.jpg'),
('Executive Suite', 'Luxurious suite with a separate living area, a king-sized bed, and a private balcony with ocean views. Includes a large bathroom with a Jacuzzi tub and a walk-in shower.', 300.00, 'executive_suite.jpg'),
('Family Room', 'Spacious room designed for families, with a king-sized bed and a bunk bed. Features a play area for kids and complimentary breakfast for the entire family.', 180.00, 'family_room.jpg'),
('Single Room', 'Compact room with a single bed, perfect for solo travelers. Includes a writing desk, free Wi-Fi, and a private bathroom with a shower.', 80.00, 'single_room.jpg'),
('Honeymoon Suite', 'Romantic suite with a king-sized bed, heart-shaped Jacuzzi, and a private terrace with stunning sunset views. Includes a bottle of champagne and chocolate-covered strawberries.', 250.00, 'honeymoon_suite.jpg'),
('Business Class Room', 'Elegant room designed for business travelers, featuring a queen-sized bed, ergonomic work desk, and a spacious seating area. Includes access to the executive lounge.', 200.00, 'business_class_room.jpg'),
('Presidential Suite', 'Opulent suite with a grand bedroom, a separate living room, and a dining area. Features a private terrace with panoramic views, a fully equipped kitchen, and 24-hour butler service.', 500.00, 'presidential_suite.jpg');
