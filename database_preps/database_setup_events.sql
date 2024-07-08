CREATE DATABASE IF NOT EXISTS events;
USE events;

CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(100),
    name VARCHAR(100),
    description TEXT,
    date VARCHAR(100),
    price DECIMAL(10, 2),
    filename VARCHAR(255)
);

INSERT INTO events (category, name, description, date, price, filename) VALUES
('Technology', 'Tech Innovators Congress', 'A gathering of the brightest minds in technology, showcasing the latest innovations and trends. Includes keynote speeches, workshops, and networking opportunities.', '1. July - 3. July', 250.00, 'tech_innovators_congress.jpg'),
('Entertainment', 'Gala Night Extravaganza', 'An elegant evening of fine dining, live entertainment, and dancing. A perfect event for socializing and celebrating in a luxurious setting.', '15. August', 150.00, 'gala_night_extravaganza.jpg'),
('Music', 'Music Festival Fiesta', 'A vibrant outdoor music festival featuring multiple stages, a diverse lineup of artists, and food trucks. A weekend of fun, music, and community.', '10. September - 12. September', 100.00, 'music_festival_fiesta.jpg'),
('Art & Culture', 'Art & Culture Expo', 'An exhibition celebrating art and culture with displays from local and international artists, interactive installations, and workshops.', '20. August - 22. August', 50.00, 'art_culture_expo.jpg'),
('Health & Wellness', 'Health and Wellness Retreat', 'A rejuvenating retreat focusing on health and wellness. Includes yoga sessions, meditation classes, nutritional workshops, and spa treatments.', '1. October - 5. October', 300.00, 'health_wellness_retreat.jpg'),
('Business', 'Startup Pitch Night', 'An event where entrepreneurs present their startup ideas to a panel of investors and industry experts. Includes networking sessions and feedback opportunities.', '8. November', 75.00, 'startup_pitch_night.jpg'),
('Food & Beverage', 'Food and Wine Festival', 'A culinary delight featuring gourmet food stalls, wine tastings, and cooking demonstrations by renowned chefs. A paradise for food and wine enthusiasts.', '15. September - 17. September', 120.00, 'food_wine_festival.jpg'),
('Literature', 'Literary Symposium', 'A symposium for literature lovers, with author readings, book signings, and panel discussions on various literary topics. Ideal for writers and avid readers.', '10. October', 60.00, 'literary_symposium.jpg'),
('Clothing', 'Fashion Showcase', 'A glamorous event presenting the latest fashion trends and collections from top designers. Includes runway shows, pop-up shops, and style consultations.', '22. October', 180.00, 'fashion_showcase.jpg'),
('Charity', 'Charity Gala', 'A fundraising gala supporting a noble cause. Includes a silent auction, live entertainment, and a gourmet dinner. An evening of giving and glamour.', '12. December', 200.00, 'charity_gala.jpg');
