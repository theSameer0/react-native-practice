-- +goose Up
-- +goose StatementBegin
INSERT INTO theatre (Id,Name,Image,Location) VALUES 
('0','Urvashi Cinema Hall','https://ik.imagekit.io/2h0gcydui/images/UrvashiCinemaHall.png','Shivaji Nagar'),
('1','Inox','https://ik.imagekit.io/2h0gcydui/images/Theatre.png','1mg Mall'),
('2','Cinepolis','https://ik.imagekit.io/2h0gcydui/images/Theatre.png','Herbal'),
('3','Matrix','https://ik.imagekit.io/2h0gcydui/images/Theatre.png','English'),
('4','Cinema Hall','https://ik.imagekit.io/2h0gcydui/images/Theatre.png','SLN Mall'),
('5','Cinema Hall','https://ik.imagekit.io/2h0gcydui/images/Theatre.png','SLN Mall'),
('6','Cinema Hall','https://ik.imagekit.io/2h0gcydui/images/Theatre.png','SLN Mall'),
('7','Cinema Hall','https://ik.imagekit.io/2h0gcydui/images/Theatre.png','DLF Mall');
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DELETE FROM theatre WHERE 1=1;
-- +goose StatementEnd
