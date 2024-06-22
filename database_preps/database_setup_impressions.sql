CREATE DATABASE IF NOT EXISTS impressions;
USE impressions;

CREATE TABLE IF NOT EXISTS impressions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    filename VARCHAR(255),
    username TEXT
);

INSERT INTO impressions (name, description, filename, username) VALUES
('Breathtaking Mountain View', 'The view from our room was absolutely breathtaking. Waking up to the sight of the mountains each morning was a highlight of our stay.', 'mountain_view.png', 'JohnDoe'),
('Luxurious King Suite', 'The King Suite was pure luxury. The bed was incredibly comfortable, and the room was spacious with elegant decor. The bathroom was a spa-like retreat.', 'king_suite.png', 'JaneSmith'),
('Cozy and Comfortable', 'Our room was cozy and made us feel at home. The staff ensured we had everything we needed, and the room was spotless. Perfect for a relaxing getaway.', 'cozy_room.png', 'MikeJohnson'),
('Spectacular Ocean View', 'We had a spectacular view of the ocean from our balcony. Listening to the waves and enjoying the sunset every evening was a magical experience.', 'ocean_view.png', 'EmilyClark'),
('Excellent Service', 'The service at the hotel was top-notch. Every staff member was attentive and friendly, making our stay enjoyable and hassle-free.', 'excellent_service.png', 'DavidLee'),
('Spacious Family Room', 'The family room was perfect for us. Plenty of space for the kids to play and for us to unwind. The bunk beds were a hit with the children.', 'family_room.png', 'ChrisDavis'),
('Romantic Honeymoon Suite', 'Our honeymoon suite was everything we dreamed of. The heart-shaped Jacuzzi and the private terrace with sunset views made our stay unforgettable.', 'honeymoon_suite.png', 'JessicaWilson'),
('Convenient Business Amenities', 'As a business traveler, I appreciated the ergonomic work desk and high-speed internet. The executive lounge was a great place to unwind after meetings.', 'business_amenities.png', 'DanielMartinez'),
('Tranquil Garden View Room', 'Our garden view room was tranquil and peaceful. The balcony overlooking the lush greenery was a perfect place to enjoy our morning coffee.', 'garden_view_room.png', 'OliviaGarcia');
